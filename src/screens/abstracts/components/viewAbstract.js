import React from 'react'
import { Text, Title, Alert, Button, Card, Input } from '../../../components'
import Styles from '../../../styles/styles'
import { Colors } from '../../../styles/base/index'
import { DeviceContext } from '../../../store/contexts/index'
import { useRouteMatch } from 'react-router-dom'

function ViewAbstract(props) {
   const device = React.useContext(DeviceContext)
   const [confirm, setConfirmMessage] = React.useState()
   const { path } = useRouteMatch()

   const styles = {
      text: { color: Colors.accent.label },
      text2: { color: Colors.accent.label, fontSize: '14px' },
      label: {
         margin: '8px 32px 8px 0px',
         fontSize: '14px',
         color: Colors.accent.primary,
      },
      label2: {
         marginBottom: '8px',
         fontSize: '14px',
         color: Colors.accent.primary,
      },
   }

   const renderAbstract = (
      <div
         style={{
            width: device === 'desktop' ? '60%' : '100%',
         }}
      >
         <Input disabled={true} type='textArea'>
            {props.abstract.abstract}
         </Input>

         <Text
            style={{
               margin: '32px 0px 32px 0px',
               backgroundColor: Colors.alert.success,
               color: Colors.accent.secondary,
               padding: '8px 32px 8px 32px',
               width: 'fit-content',
               borderRadius: '8px',
            }}
            type='textBold'
         >
            Analysis
         </Text>
         <div
            style={{
               backgroundColor: 'white',
               padding: '16px',
               borderRadius: '8px',
            }}
         >
            <div style={Styles.form.textControl}>
               <Text type='label' style={styles.label}>
                  Purpose and Significance
               </Text>
               <Text style={styles.text}>{props.abstract.significance}</Text>
            </div>
            <div style={Styles.form.textControl}>
               <Text type='label' style={styles.label}>
                  Description/Design
               </Text>
               <Text style={styles.text}>{props.abstract.description}</Text>
            </div>
            <div style={Styles.form.textControl}>
               <Text type='label' style={styles.label}>
                  Knowledge gap/Conflict/Limitations
               </Text>
               <Text style={styles.text}>{props.abstract.knowledgeGap}</Text>
            </div>
            <div style={Styles.form.textControl}>
               <Text type='label' style={styles.label}>
                  Research question/Statement
               </Text>
               <Text style={styles.text}>
                  {props.abstract.researchQuestion}
               </Text>
            </div>
            <div style={Styles.form.textControl}>
               <Text type='label' style={styles.label}>
                  Hypothesis/Study plan
               </Text>
               <Text style={styles.text}>{props.abstract.hypothesis}</Text>
            </div>
            <div style={Styles.form.textControl}>
               <Text type='label' style={styles.label}>
                  Major trends/findings
               </Text>
               <Text style={styles.text}>{props.abstract.majorTrends}</Text>
            </div>
            <div style={Styles.form.textControl}>
               <Text type='label' style={styles.label}>
                  Conclusion/Implications
               </Text>
               <Text style={styles.text}>{props.abstract.conclusion}</Text>
            </div>
            <div style={Styles.form.textControl}>
               {props.error && (
                  <Alert type='ERROR_MESSAGE'>{props.error.message}</Alert>
               )}
            </div>
         </div>
      </div>
   )

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

   const renderDetailsCard = (
      <Card
         style={{
            textAlign: 'left',
            padding: '16px',

         }}
      >
         <div style={Styles.form.textControl}>
            <Text type='label' style={styles.label2}>
               Subject
            </Text>
            <Text style={styles.text2}>{props.abstract.subject}</Text>
         </div>
         <div style={Styles.form.textControl}>
            <Text type='label' style={styles.label2}>
               Created at
            </Text>
            <Text style={styles.text2}>{props.abstract.createdAt}</Text>
         </div>
         <div style={Styles.form.textControl}>
            <Text type='label' style={styles.label2}>
               Last edited
            </Text>
            <Text style={styles.text2}>{props.abstract.updatedAt}</Text>
         </div>
         <Button
            style={{
               backgroundColor: Colors.alert.error,
               width: '100%',
            }}
            name='Delete'
            onClick={(e) => confirmDeletion(e)}
         >
            Delete
         </Button>
      </Card>
   )

   return (
      confirm ? <Alert type='WARN_MESSAGE_MODAL' onAbort={()=>setConfirmMessage()} onConfirm={(e)=>alertDelete(e,props.abstract._id)}>{confirm}</Alert> :
      <div style={Styles.dashboard}>
         <div style={Styles.dashboard.header}>
            <Title>{props.abstract.title}</Title>
            <Button
               name='Edit'
               onClick={() =>
                  props.history.push(
                     `/abstracts/edit/node=${Math.floor(
                        Math.random() * 10
                     )}?id=${props.abstract._id}`
                  )
               }
            />
         </div>
         <div
            style={{
               display: device === 'desktop' && 'flex',
               justifyContent: 'space-between',
               padding: '16px',
            }}
         >
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error.message}</Alert>
            )}
            {props.loading && <h1>loading...</h1>}

            {renderAbstract}
            <div
               style={{
                  margin:
                     device === 'desktop' ? '0px 0px 0px 16px' : '16px 0px',
                  width: device === 'desktop' && '40%',
               }}
            >
               {renderDetailsCard}
            </div>
         </div>
      </div>
   )
}

export default ViewAbstract
