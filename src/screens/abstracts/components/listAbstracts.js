import React from 'react'
import { AbstractCard, Button, Title, Alert } from '../../../components/index'
import Styles from '../../../styles/styles/index'

function ListAbstracts(props) {
   const renderAbstracts = props.abstracts?.map((abstract) => (
      <AbstractCard
         key={abstract._id}
         open={props.open}
         delete={props.delete}
         abstract={abstract}
         history={props.history}
      />
   ))
   function create() {
      props.history.push(`abstracts/new/untitled`)
   }
   return (
      <div style={Styles.dashboard}>
         <div style={Styles.dashboard.header}>
            <Title>My abstracts</Title>
            <Button name='Create' onClick={() => create()} />
         </div>
         <div style={Styles.dashboard.content}>
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error.message}</Alert>
            )}
            {props.loading && <h1>loading...</h1>}
            {props.deleting && <h1>deleting...</h1>}
            {props.abstracts && renderAbstracts}
         </div>
      </div>
   )
}

export default ListAbstracts
