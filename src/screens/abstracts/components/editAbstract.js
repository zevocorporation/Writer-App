import React,{useState} from 'react'
import { Text, Title, Input, Alert, Button } from '../../../components'
import Styles from '../../../styles/styles'
import { Colors } from '../../../styles/base/index'
import { Validator } from '../../../utils/index'

function EditAbstract(props) {
   const [warning, setWarning] = useState()
   const [significance, setSignificance] = useState(props.abstract.significance)
   const [description, setDescription] = useState(props.abstract.description)
   const [knowledgeGap, setKnowledgeGap] = useState(props.abstract.knowledgeGap)
   const [researchQuestion, setResearchQuestion] = useState(props.abstract.researchQuestion)
   const [hypothesis, setHypothesis] = useState(props.abstract.hypothesis)
   const [majorTrends, setMajorTrends] = useState(props.abstract.majorTrends)
   const [conclusion, setConclusion] = useState(props.abstract.conclusion)
   const [finalAbstract, setFinalAbstract] = useState(props.abstract.abstract)


   const putSpace = (text) => {
      if(!text.charAt(0).includes(' ')) 
      {
         return ' ' + text
      }
   }

   function updateInput(e,text){
      e.preventDefault()
      const spacedText = putSpace(text)
      
      if (text === props.watch('significance')) setSignificance(spacedText)

      if (text === props.watch('description')) setDescription(spacedText)

      if (text === props.watch('knowledgeGap')) setKnowledgeGap(spacedText)
      
      if (text === props.watch('researchQuestion')) setResearchQuestion(spacedText)
      
      if (text === props.watch('hypothesis')) setHypothesis(spacedText)

      if (text === props.watch('majorTrends')) setMajorTrends(spacedText)

      if (text === props.watch('conclusion')) setConclusion(spacedText)

      function validate(name){
         if(name)
         {
            return name
         }
         else return props.watch(name)
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
   async function update() {
      const validateTitle = await Validator.wordCount(
         props.watch('title'),
         5,
         true,
         'Title'
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
         'hypothesis'
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
         validateSignificance.isValid &&
         validateDescription.isValid &&
         validateKnowledgeGap.isValid &&
         validateResearchQuestion.isValid &&
         validateHypothesis.isValid &&
         validateMajorTrends.isValid &&
         validateConclusion.isValid
      ) {
         const res = await props.update({
            variables: {
               id: props.abstract._id,
               title: props.watch('title'),
               significance: significance,
               description: description,
               knowledgeGap: knowledgeGap,
               researchQuestion: researchQuestion,
               hypothesis: hypothesis,
               majorTrends: majorTrends,
               conclusion: conclusion,
               abstract: finalAbstract
                  ? finalAbstract
                  : props.abstract.abstract,
            },
         })
         if (res.data?.updateAbstract) {
            props.history.push('/abstracts')
         }
      }
   }

   const renderAbstract = (
      <React.Fragment>
         {warning && <Alert type='WARN_MESSAGE'>{warning}</Alert>}

         <div style={Styles.form.textControl}>
            <Text>Title</Text>
            <Input
               type='text'
               register={props.register}
               defaultValue={props.abstract.title}
               name='title'
            />
         </div>

         <div style={Styles.form.textControl}>
            <Text>Purpose and Significance</Text>
            <Input
               text={props.watch('significance')}
               wordLimit={25}
               type='textArea'
               register={props.register}
               name='significance'
               style={Styles.form.textAreaInput}
               onChange={(e)=>updateInput(e,props.watch('significance'))}
            >
               {significance}
            </Input>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Description/Design</Text>
            <Input
               type='textArea'
               text={props.watch('description')}
               wordLimit={35}
               register={props.register}
               name='description'
               style={Styles.form.textAreaInput}
               onChange={(e)=>updateInput(e,props.watch('description'))}

            >
               {description}
            </Input>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Knowledge gap/Conflict/Limitations</Text>
            <Input
               text={props.watch('knowledgeGap')}
               wordLimit={35}
               type='textArea'
               register={props.register}
               name='knowledgeGap'
               style={Styles.form.textAreaInput}
               onChange={(e)=>updateInput(e,props.watch('knowledgeGap'))}

            >
               {knowledgeGap}
            </Input>
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

            >
               {researchQuestion}
            </Input>
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

            >
               {hypothesis}
            </Input>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Major trends/findings</Text>
            <Input
               type='textArea'
               text={props.watch('majorTrends')}
               wordLimit={35}
               register={props.register}
               name='majorTrends'
               style={Styles.form.textAreaInput}
               onChange={(e)=>updateInput(e,props.watch('majorTrends'))}

            >
             
               {majorTrends}
            </Input>
         </div>
         <div style={Styles.form.textControl}>
            <Text>Conclusion/Implications</Text>
            <Input
               type='textArea'
               text={props.watch('conclusion')}
               wordLimit={35}
               register={props.register}
               name='conclusion'
               style={Styles.form.textAreaInput}
               onChange={(e)=>updateInput(e,props.watch('conclusion'))}
            >
               {conclusion}
            </Input>
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
            </Text>{' '}
            
               <Input
                  style={{ paddingTop: '16px' }}
                  type='textArea'
                  register={props.register}
                  disabled={true}
                  name='abstract'
                  value={finalAbstract}
               />
         
         </div>
      </React.Fragment>
   )

   return (
      <div style={Styles.dashboard}>
         <div style={Styles.dashboard.header}>
            <Title>Edit Abstract</Title>
            <Button name='Save' onClick={() => update()} />
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

export default EditAbstract
