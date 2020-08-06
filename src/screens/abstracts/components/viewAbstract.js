import React from 'react'
import { Text, Alert, Button } from '../../../components'
import Styles from '../../../styles/styles'

function CreateAbstract(props) {
   function update() {
      props.update({
         variables: {
            id: props.abstract._id,
            title: props.watch('title'),
            significance: props.watch('significance'),
            description: props.watch('description'),
            knowledgeGap: props.watch('knowledgeGap'),
            researchQuestion: props.watch('researchQuestion'),
            hypothesis: props.watch('hypothesis'),
            majorTrends: props.watch('majorTrends'),
            conclusion: props.watch('conclusion'),
            abstract: props.watch('abstract'),
         },
      })
   }
   const renderAbstract = (
      <React.Fragment>
         <div style={Styles.form.textControl}>
            <Text>{props.abstract.abstract}</Text>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Subject</Text>
            <Text>{props.abstract.subject}</Text>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Purpose and Significance</Text>
            <Text>{props.abstract.significance}</Text>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Description/Design</Text>
            <Text>{props.abstract.description}</Text>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Knowledge gap/Conflict/Limitations</Text>
            <Text>{props.abstract.knowledgeGap}</Text>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Research question/Statement</Text>
            <Text>{props.abstract.researchQuestion}</Text>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Hypothesis/Study plan</Text>
            <Text>{props.abstract.hypothesis}</Text>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Major trends/findings</Text>
            <Text>{props.abstract.majorTrends}</Text>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Conclusion/Implications</Text>
            <Text>{props.abstract.conclusion}</Text>
         </div>
         <div style={Styles.form.textControl}>
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error.message}</Alert>
            )}
            <Button
               style={{ width: '280px' }}
               name='Create'
               onClick={() => {
                  update()
               }}
            />
         </div>
      </React.Fragment>
   )

   return renderAbstract
}

export default CreateAbstract
