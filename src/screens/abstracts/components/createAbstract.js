import React, { useState } from 'react'
import { Text, Title, Input, Alert, Button } from '../../../components'
import Styles from '../../../styles/styles'
import { Validator } from '../../../utils/index'
import { Colors } from '../../../styles/base/index'

function CreateAbstract(props) {
   const [warning, setWarning] = useState()

   async function create() {
      const validateTitle = await Validator.wordCount(
         props.watch('title'),
         5,
         'Title'
      )
      const validateSubject = await Validator.wordCount(
         props.watch('subject'),
         5,
         'Subject'
      )
      const validateSignificance = await Validator.wordCount(
         props.watch('significance'),
         25,
         'Significance'
      )
      const validateDescription = await Validator.wordCount(
         props.watch('description'),
         35,
         'Description'
      )
      const validateKnowledgeGap = await Validator.wordCount(
         props.watch('knowledgeGap'),
         35,
         'KnowledgeGap'
      )
      const validateResearchQuestion = await Validator.wordCount(
         props.watch('researchQuestion'),
         35,
         'ResearchQuestion'
      )
      const validateHypothesis = await Validator.wordCount(
         props.watch('hypothesis'),
         35,
         'Hypothesis'
      )
      const validateMajorTrends = await Validator.wordCount(
         props.watch('majorTrends'),
         35,
         'MajorTrends'
      )
      const validateConclusion = await Validator.wordCount(
         props.watch('conclusion'),
         35,
         'Conclusion'
      )

      if (
         validateTitle.message ||
         validateSubject.message ||
         validateSignificance.message ||
         validateDescription.message ||
         validateKnowledgeGap.message ||
         validateResearchQuestion.message ||
         validateHypothesis.message ||
         validateMajorTrends.message ||
         validateConclusion.message
      ) {
         setWarning(
            validateTitle.message ||
               validateSubject.message ||
               validateSignificance.message ||
               validateDescription.message ||
               validateKnowledgeGap.message ||
               validateResearchQuestion.message ||
               validateHypothesis.message ||
               validateMajorTrends.message ||
               validateConclusion.message
         )
      }

      if (
         validateTitle.isValid &&
         validateSubject.isValid &&
         validateSignificance.isValid &&
         validateDescription.isValid &&
         validateKnowledgeGap.isValid &&
         validateResearchQuestion.isValid &&
         validateHypothesis.isValid &&
         validateMajorTrends.isValid &&
         validateConclusion.isValid
      ) {
         const res = await props.create({
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
         if (res.data?.createAbstract?._id) {
            props.history.push('/abstracts')
         }
      }
   }

   const finalAbstract =
      props.watch('significance') +
      props.watch('description') +
      props.watch('knowledgeGap') +
      props.watch('researchQuestion') +
      props.watch('hypothesis') +
      props.watch('majorTrends') +
      props.watch('conclusion')
   const renderAbstract = (
      <React.Fragment>
         {warning && <Alert type='WARN_MESSAGE'>{warning}</Alert>}
         <div style={Styles.form.textControl}>
            <Text>Title</Text>
            <Input
               style={Styles.form.input}
               type='text'
               register={props.register}
               name='title'
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Subject</Text>
            <Input type='text' register={props.register} name='subject' />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Purpose and Significance</Text>
            <Input
               type='textArea'
               text={props.watch('significance')}
               wordLimit={25}
               register={props.register}
               name='significance'
               style={Styles.form.textAreaInput}
            ></Input>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Description/Design</Text>
            <Input
               text={props.watch('description')}
               wordLimit={35}
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
               text={props.watch('knowledgeGap')}
               wordLimit={35}
               register={props.register}
               name='knowledgeGap'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Research question/Statement</Text>
            <Input
               type='textArea'
               text={props.watch('researchQuestion')}
               wordLimit={35}
               register={props.register}
               name='researchQuestion'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Hypothesis/Study plan</Text>
            <Input
               type='textArea'
               text={props.watch('hypothesis')}
               wordLimit={35}
               register={props.register}
               name='hypothesis'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Major trends/findings</Text>
            <Input
               text={props.watch('majorTrends')}
               wordLimit={35}
               type='textArea'
               register={props.register}
               name='majorTrends'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Conclusion/Implications</Text>
            <Input
               text={props.watch('conclusion')}
               wordLimit={35}
               type='textArea'
               register={props.register}
               name='conclusion'
               style={Styles.form.textAreaInput}
            />
         </div>
         <div style={Styles.form.textControl}>
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
               Your abstract
            </Text>
            <Input
               type='textArea'
               style={Styles.form.textAreaInput}
               register={props.register}
               name='abstract'
               value={finalAbstract}
            />
         </div>
      </React.Fragment>
   )

   return (
      <div style={Styles.dashboard}>
         <div style={Styles.dashboard.header}>
            <Title>Manage abstracts</Title>
            <Button
               style={{ width: '280px' }}
               name='Save now'
               onClick={() => create()}
            />
         </div>
         <div style={Styles.dashboard.content}>
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error.message}</Alert>
            )}
            {props.loading && <h1>loading...</h1>}
            {renderAbstract}
         </div>
      </div>
   )
}

export default CreateAbstract
