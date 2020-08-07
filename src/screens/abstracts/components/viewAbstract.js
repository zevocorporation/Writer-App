import React from 'react'
import { Text, Title, Alert, Button, Card, Input } from '../../../components'
import Styles from '../../../styles/styles'
import { Colors } from '../../../styles/base/index'
function ViewAbstract(props) {
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
   async function deleteAbstract(id) {
      const res = await props.delete({ variables: { id: id } })
      if (res.data?.deleteAbstract?._id) {
         props.history.push('/abstracts')
      }
   }
   const renderAbstract = (
      <React.Fragment>
         <Input disabled={true} style={{ padding: '16px 0px' }} type='textArea'>
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
      </React.Fragment>
   )

   const renderDetailsCard = (
      <Card
         style={{
            textAlign: 'left',
            padding: '32px',
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
         <div style={Styles.form.textControl}>
            <Button
               style={{ backgroundColor: Colors.alert.error }}
               name='Delete'
               onClick={() => deleteAbstract(props.abstract._id)}
            >
               Delete
            </Button>
         </div>
      </Card>
   )

   return (
      <div style={Styles.dashboard}>
         <div style={Styles.dashboard.header}>
            <Title>{props.abstract.title}</Title>
            <Button
               style={{ width: '280px' }}
               name='Edit'
               onClick={() =>
                  props.history.push(
                     `/abstract/edit/node=${Math.floor(
                        Math.random() * 10
                     )}?id=${props.abstract._id}`
                  )
               }
            />
         </div>
         <div
            style={{
               display: 'flex',
               justifyContent: 'space-between',
               padding: '16px',
            }}
         >
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error.message}</Alert>
            )}
            {props.loading && <h1>loading...</h1>}

            <div
               style={{
                  width: '76%',
               }}
            >
               {renderAbstract}
            </div>
            <div style={{ margin: '0px 0px 0px auto' }}>
               {renderDetailsCard}
            </div>
         </div>
      </div>
   )
}

export default ViewAbstract
