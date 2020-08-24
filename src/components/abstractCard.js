import React, { useContext } from 'react'
import { Card, Text, Icon,Alert } from '.'
import { DeleteIcon } from '../assets/assets'
import { useRouteMatch } from 'react-router-dom'
import { Colors } from '../styles/base/index'
import { DeviceContext } from '../store/contexts/index'

function AbstractCard(props) {
   const { path } = useRouteMatch()
   const device = useContext(DeviceContext)
   const [confirm, setConfirmMessage] = React.useState()

   async function open(e, id) {
      e.preventDefault()
      props.history.push(
         `${path}/node=${Math.floor(Math.random() * 10)}?id=${id}`
      )
   }

   function confirmDeletion(e) {
      e.preventDefault()
      setConfirmMessage('Are you sure')
   }

   async function alertDelete(e,id){
      e.preventDefault(e)
      const res = await props.delete({ variables: { id: id } })
      if (res.data?.deleteAbstract?._id) {
         props.history.push('/abstracts')
      }
   }

   const styles = {
      card: {
         cursor: 'pointer',
         display: 'flex',
         flexDirection: device === 'mobile' ? 'column' : 'row',
         width: '100%',
         alignItems: device === 'mobile' ? 'flex-start' : 'center',
         justifyContent: 'space-around',
         marginBottom: '16px',

         content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
         },

         header: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            textAlign: 'left',
            marginBottom: '16px',
         },

         block: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '8px 22px 0px 0px',
         },
         info: {
            display: 'flex',
            flexDirection: device === 'mobile' ? 'column' : 'row',
         },
         control: {
            width: '30%',
            justifyContent: 'space-around',
            display: 'flex',
            backgroundColor: 'white',
         },
      },
   }

   const renderIcon = (
      <div style={styles.card.control}>
         <Icon
            onClick={(e) => confirmDeletion(e)}
            style={{ width: '28px', margin: '16px' }}
            icon={DeleteIcon}
         />
      </div>
   )

   const renderMutationTimes = (
      <div style={{ display: 'flex' }}>
         <div style={styles.card.block}>
            <Text style={{ fontSize: '14px' }}>Created at</Text>

            <Text type='label' style={{ fontSize: '14px', textAlign: 'left' }}>
               {props.abstract.createdAt}
            </Text>
         </div>
         <div style={styles.card.block}>
            <Text style={{ fontSize: '14px' }}>Last edited</Text>
            <Text type='label' style={{ fontSize: '14px', textAlign: 'left' }}>
               {props.abstract.updatedAt}
            </Text>
         </div>
      </div>
   )

   const renderCard = (
      confirm ? <Alert type='WARN_MESSAGE_MODAL' onAbort={()=>setConfirmMessage()} onConfirm={(e)=>alertDelete(e,props.abstract._id)}>{confirm}</Alert> :
      <Card style={styles.card}>
         <div
            style={styles.card.content}
            onClick={(e) => open(e, props.abstract._id)}
         >
            <div style={styles.card.header}>
               <Text
                  type='textBold'
                  style={{
                     fontSize: '18px',
                     color: Colors.accent.tertiary,
                  }}
               >
                  {props.abstract.title}
               </Text>
               {device === 'mobile' && renderIcon}
            </div>
            <div style={styles.card.info}>
               <div style={styles.card.block}>
                  <Text style={{ fontSize: '14px' }}>Subject</Text>
                  <Text
                     type='label'
                     style={{ fontSize: '14px', textAlign: 'left' }}
                  >
                     {props.abstract.subject}
                  </Text>
               </div>
               {renderMutationTimes}
            </div>
         </div>
         {device === 'desktop' && renderIcon}
      </Card>
   )

   return renderCard
}

export default AbstractCard
