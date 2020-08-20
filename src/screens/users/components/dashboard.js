import React, { useContext } from 'react'
import Abstracts from '../../abstracts/abstracts'
import { DeviceContext } from '../../../store/contexts/index'
import { Switch, Route } from 'react-router-dom'
import Styles from '../../../styles/styles/index'
import { Card, Text, Title, Link } from '../../../components/index'
import { Colors } from '../../../styles/base/index'
import { LOAD_ABSTRACTS } from '../../abstracts/gql/queries'
import { useQuery } from '@apollo/react-hooks'
import ReactLoading from 'react-loading'

function Dashboard(props) {
   const device = useContext(DeviceContext)

   const [count, setCount] = React.useState('0')

   const {} = useQuery(LOAD_ABSTRACTS, {
      errorPolicy: 'all',
      onCompleted({ getUserAbstracts }) {
         setCount(getUserAbstracts.length)
      },
   })

   const styles = {
      dashboard: {
         display: 'flex',
         width: device === 'desktop' ? '80%' : '100%',
         marginLeft: device === 'desktop' && '19.5vw',
         paddingTop: device === 'desktop' && '52px',
         flexDirection: 'column',
         overflowY: 'scroll',
         alignItems: 'flex-start',
         justifyContent: 'center',
         justifyContent: 'center',
      },
   }

   return (
      <div style={styles.dashboard}>
         <Switch>
            <Route path='/abstracts' component={Abstracts} />
            <Route exact path='/'>
               <div style={Styles.dashboard}>
                  <div style={Styles.dashboard.content}>
                     <Card
                        style={{
                           width: '100%',
                           flexDirection: 'row',
                           justifyContent: 'space-between',
                        }}
                     >
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                           }}
                        >
                           <Title color={Colors.primary}>
                              {count ? (
                                 count
                              ) : (
                                 <ReactLoading
                                    type='spin'
                                    color={Colors.primary}
                                    width='22px'
                                    height='22px'
                                 />
                              )}
                           </Title>
                           <Text>abstracts created</Text>
                        </div>
                        <div>
                           <Link to='/abstracts' color={Colors.primary}>
                              View abstracts {`>`}
                           </Link>
                        </div>
                     </Card>
                  </div>
               </div>
            </Route>
         </Switch>
      </div>
   )
}

export default Dashboard
