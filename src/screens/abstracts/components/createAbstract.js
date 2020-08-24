import React, { useState } from 'react'
import { Text, Title, Input, Alert, Button } from '../../../components'
import Styles from '../../../styles/styles'
import { Validator } from '../../../utils/index'
import { Colors } from '../../../styles/base/index'

function CreateAbstract(props) {
   const [warning, setWarning] = useState()
   const [significance, setSignificance] = useState()
   const [description, setDescription] = useState()
   const [knowledgeGap, setKnowledgeGap] = useState()
   const [researchQuestion, setResearchQuestion] = useState()
   const [hypothesis, setHypothesis] = useState()
   const [majorTrends, setMajorTrends] = useState()
   const [conclusion, setConclusion] = useState()
   const [finalAbstract, setFinalAbstract] = useState()


   const putSpace = (text) => {
      if(!text.charAt(0).includes(' ')) 
      {
         return ' '+text
      }
   }

   function updateInput(e,text){
      e.preventDefault()
      const spacedText = putSpace(text)
      if (props.watch('significance') && text === props.watch('significance')) setSignificance(spacedText)
      if (props.watch('description') && text === props.watch('description')) setDescription(spacedText)
      if (props.watch('knowledgeGap') && text === props.watch('knowledgeGap')) setKnowledgeGap(spacedText)
      if (props.watch('researchQuestion') && text === props.watch('researchQuestion')) setResearchQuestion(spacedText)
      if (props.watch('hypothesis') && text === props.watch('hypothesis')) setHypothesis(spacedText)
      if (props.watch('majorTrends') && text === props.watch('majorTrends')) setMajorTrends(spacedText)
      if (props.watch('conclusion') &&text === props.watch('conclusion')) setConclusion(spacedText)

      function validate(name){
         if(name)
         {
            return name
         }
         else return ''
      }
      const final = 
      validate(significance) + 
      validate(description) + 
      validate(knowledgeGap) + 
      validate(researchQuestion) + 
      validate(hypothesis) + 
      validate(majorTrends) + 
      validate(conclusion)
      
      setFinalAbstract(final)
   }     

   async function create() {
      const validateTitle = await Validator.wordCount(
         props.watch('title'),
         5,
         true,
         'Title'
      )
      const validateSubject = await Validator.wordCount(
         props.watch('subject'),
         5,
         true,
         'Subject'
      )
      const validateSignificance = await Validator.wordCount(
         props.watch('significance'),
         25,
         true,
         'Significance'
      )
      const validateDescription = await Validator.wordCount(
         props.watch('description'),
         35,
         false,
         'Description'
      )
      const validateKnowledgeGap = await Validator.wordCount(
         props.watch('knowledgeGap'),
         35,
         false,
         'KnowledgeGap'
      )
      const validateResearchQuestion = await Validator.wordCount(
         props.watch('researchQuestion'),
         35,
         false,
         'ResearchQuestion'
      )
      const validateHypothesis = await Validator.wordCount(
         props.watch('hypothesis'),
         35,
         false,
         'Hypothesis'
      )
      const validateMajorTrends = await Validator.wordCount(
         props.watch('majorTrends'),
         35,
         false,
         'MajorTrends'
      )
      const validateConclusion = await Validator.wordCount(
         props.watch('conclusion'),
         35,
         true,
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
               abstract: finalAbstract,
            },
         })
         if (res.data?.createAbstract?._id) {
            props.history.push('/abstracts')
         }
      }
   }

   
   const renderAbstract = (
      <React.Fragment>
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
               onChange={(e)=>updateInput(e,props.watch('significance'))}
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
               onChange={(e)=>updateInput(e,props.watch('description'))}

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
               onChange={(e)=>updateInput(e,props.watch('knowledgeGap'))}

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
               onChange={(e)=>updateInput(e,props.watch('researchQuestion'))}

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
               onChange={(e)=>updateInput(e,props.watch('hypothesis'))}

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
               onChange={(e)=>updateInput(e,props.watch('majorTrends'))}

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
               onChange={(e)=>updateInput(e,props.watch('conclusion'))}
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text
               style={{
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
            {
               <Input
                  type='textArea'
                  style={Styles.form.textAreaInput}
                  register={props.register}
                  name='abstract'
                  value={finalAbstract}
               />
            }
         </div>
      </React.Fragment>
   )

   const renderHelper = (
      <React.Fragment>
      {warning && <Alert type='WARN_MESSAGE'>{warning}</Alert>}
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginBottom: '32px',
            marginTop: '32px',

         }}
      >
         <div
            style={{
               display: 'flex',
               flexDirection: 'row',
               justifyContent: 'flex-start',
               alignItems: 'center',
            }}
         >
            <Title style={{ fontSize: '16px', marginRight: '16px' }}>
               Search for abstracts here
            </Title>
            <Text
               style={{
                  backgroundColor: Colors.accent.label,
                  color: Colors.accent.secondary,
                  padding: '8px 16px 8px 16px',
                  width: 'fit-content',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 100,
               }}
               type='textBold'
            >
               sample abstract
            </Text>
         </div>
         <div
            style={{
               display: 'flex',
               flexDirection: 'row',
               flexWrap: 'wrap',
               alignItems: 'center',
               maxWidth: '100%',
               justifyContent: 'space-between',
            }}
         >
            <Button
               style={{ width: '160px' }}
               newWindow = {true}

               target='https://www.elsevier.com/en-in'
               name='Elsevier'
            />
            <Button
               style={{ width: '160px' }}
               newWindow = {true}

               target='https://www.jstor.org/'
               name='JSTOR'
            />
            <Button
               style={{ width: '160px' }}
               target='https://www.sciencedirect.com/'
               newWindow = {true}
               name='Sciencedirect'
            />
            <Button
               target='https://www.ebsco.com/'
               newWindow = {true}
               style={{ width: '160px' }}
               name='EBSCO'
            />
            <Button
               style={{
                  width: '160px',
               }}
               newWindow = {true}
               target='https://ieeexplore.ieee.org/'
               name='IEEE Xplore'
            />
            <Button
               style={{
                  width: '160px',
                  display: 'none',
               }}
               newWindow = {true}
               name='IEEE Xplore'
            />
         </div>
         <div style={Styles.form.textControl}>
            <Text>Paste your sample abstract here</Text>
            <Input
               type='textArea'
               text={props.watch('sample')}
               register={props.register}
               name='sample'
               style={Styles.form.textAreaInput}
            />
         </div>
      </div>
      </React.Fragment>
   )

   return (
      <div style={Styles.dashboard}>
         <div style={Styles.dashboard.header}>
            <Title>Create abstract</Title>
            <Button name='Save now' onClick={() => create()} />
         </div>
         <div style={Styles.dashboard.content}>
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error.message}</Alert>
            )}
            {props.loading && <h1>loading...</h1>}
            {renderHelper}
            {renderAbstract}
         </div>
      </div>
   )
}

export default CreateAbstract
