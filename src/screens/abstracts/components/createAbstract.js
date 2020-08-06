import React from 'react'
import { Text, Input, Alert, Button } from '../../../components'
import Styles from '../../../styles/styles'

function CreateAbstract(props) {
   function create() {
      props.create({
         variables: {
            title: props.watch('title'),
            subject: props.watch('subject'),
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
            <Text>Title</Text>
            <Input type='text' register={props.register} name='title' />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Subject</Text>
            <Input type='text' register={props.register} name='subject' />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Purpose and Significance</Text>
            <Input
               type='textArea'
               register={props.register}
               name='significance'
               style={Styles.form.textAreaInput}
            ></Input>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Description/Design</Text>
            <Input
               type='textArea'
               register={props.register}
               name='description'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Knowledge gap/Conflict/Limitations</Text>
            <Input
               type='textArea'
               register={props.register}
               name='knowledgeGap'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Research question/Statement</Text>
            <Input
               type='textArea'
               register={props.register}
               name='researchQuestion'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Hypothesis/Study plan</Text>
            <Input
               type='textArea'
               register={props.register}
               name='hypothesis'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Major trends/findings</Text>
            <Input
               type='textArea'
               register={props.register}
               name='majorTrends'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Conclusion/Implications</Text>
            <Input
               type='textArea'
               register={props.register}
               name='conclusion'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Your abstract</Text>
            <Input
               type='textArea'
               style={Styles.form.textAreaInput}
               register={props.register}
               name='abstract'
               defaultValue={
                  props.watch('significance') +
                  ' ' +
                  props.watch('description') +
                  ' ' +
                  props.watch('knowledgeGap') +
                  ' ' +
                  props.watch('researchQuestion') +
                  ' ' +
                  props.watch('hypothesis') +
                  ' ' +
                  props.watch('majorTrends') +
                  ' ' +
                  props.watch('conclusion')
               }
            />
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error.message}</Alert>
            )}
            <Button
               style={{ width: '280px' }}
               name='Create'
               onClick={() => {
                  create()
               }}
            />
         </div>
      </React.Fragment>
   )

   return renderAbstract
}

export default CreateAbstract
