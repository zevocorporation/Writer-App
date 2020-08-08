import React from 'react'
import { Text, Title, Input, Alert, Button } from '../../../components'
import Styles from '../../../styles/styles'
import { Colors } from '../../../styles/base/index'

function EditAbstract(props) {
   async function update() {
      const res = await props.update({
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
      if (res.data?.updateAbstract) {
         props.history.push('/abstracts')
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
            >
               {props.abstract.significance}
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
            >
               {props.abstract.description}
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
            >
               {props.abstract.knowledgeGap}
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
            >
               {props.abstract.researchQuestion}
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
            >
               {props.abstract.hypothesis}
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
            >
               {props.abstract.majorTrends}
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
            >
               {props.abstract.conclusion}
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
            <Button
               style={{ width: '280px' }}
               name='Save changes'
               onClick={() => update()}
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

export default EditAbstract