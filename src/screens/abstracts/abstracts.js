import React, { useReducer, useState } from 'react'
import { useForm } from 'react-hook-form'
import Styles from '../../styles/styles'

import { Alert, Title, Button, AbstractCard } from '../../components'

import { CreateAbstract, ViewAbstract, EditAbstract } from './components/index'

import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks'
import { AbstractReducer } from '../../store/reducers'

import { LOAD_ABSTRACTS, OPEN_ABSTRACT_FILE } from './gql/queries'

import {
   CREATE_ABSTRACT,
   UPDATE_ABSTRACT,
   DELETE_ABSTRACT,
} from './gql/mutations'

function Abstracts(props) {
   const { watch, register } = useForm()
   const [state, dispatch] = useReducer(AbstractReducer)
   const [action, setAction] = useState()

   const { loading, error: loadError } = useQuery(LOAD_ABSTRACTS, {
      errorPolicy: 'all',
      onCompleted({ getUserAbstracts }) {
         dispatch({
            type: 'LOAD_ABSTRACTS',
            payload: getUserAbstracts,
         })
         setAction('LIST')
      },
   })

   const [
      createAbstract,
      { loading: creating, error: createError },
   ] = useMutation(CREATE_ABSTRACT, {
      errorPolicy: 'all',
      onCompleted({ createAbstract }) {
         dispatch({
            type: 'ADD_ABSTRACT',
            payload: createAbstract,
         })
      },
   })

   const [
      openAbstract,
      { data: abstractFile, loading: opening, error: openError },
   ] = useLazyQuery(OPEN_ABSTRACT_FILE, {
      errorPolicy: 'all',
      onCompleted({ getUserAbstractDocument }) {
         dispatch({
            type: 'OPEN_ABSTRACT_FILE',
            payload: getUserAbstractDocument,
         })
         setAction('VIEW')
      },
   })

   const [
      updateAbstract,
      { loading: updating, error: updateError },
   ] = useMutation(UPDATE_ABSTRACT, {
      errorPolicy: 'all',
      onCompleted({ updateAbstract }) {
         dispatch({
            type: 'UPDATE_ABSTRACT',
            payload: updateAbstract,
         })
      },
   })

   const [
      deleteAbstract,
      { loading: deleting, error: deleteError },
   ] = useMutation(DELETE_ABSTRACT, {
      onCompleted({ deleteAbstract }) {
         dispatch({
            type: 'REMOVE_ABSTRACT',
            payload: deleteAbstract,
         })
      },
      errorPolicy: 'all',
   })

   function getTitle() {
      if (action === 'LIST') return 'Manage Abstracts'
      if (action === 'CREATE') return 'Create abstract'
      if (action === 'VIEW') return state.abstractFile?.title
      if (action === 'EDIT') return 'Edit abstract'
   }

   function getButtonName() {
      if (action === 'LIST' || !state?.myAbstracts) return 'Create abstract'
      if (action === 'CREATE') return 'Create'
      if (action === 'VIEW') return 'Edit abstract'
      if (action === 'EDIT') return 'Save Changes'
   }

   function getAction() {
      if (action === 'LIST') return () => create()
      if (action === 'CREATE') return () => console.log('create')
      if (action === 'VIEW') return () => setAction('EDIT')
      if (action === 'EDIT') return () => console.log('edit')
   }

   function create() {
      setAction('CREATE')
   }

   const renderListAbstract = (state?.myAbstracts ||
      state?.isAdded === true ||
      state?.isRemoved === true) &&
      !abstractFile && (
         <AbstractCard
            abstracts={state.myAbstracts}
            loading={opening || deleting}
            error={openError || deleteError}
            delete={deleteAbstract}
            open={openAbstract}
         />
      )

   const renderCreateAbstract = (
      <CreateAbstract
         register={register}
         watch={watch}
         loading={creating}
         error={createError}
         create={createAbstract}
      />
   )

   const renderViewAbstract = (
      <ViewAbstract
         register={register}
         watch={watch}
         abstract={state?.abstractFile}
         loading={opening}
         error={openError}
         update={updateAbstract}
      />
   )

   const renderEditAbstract = (
      <EditAbstract
         register={register}
         watch={watch}
         abstract={state?.abstractFile}
         loading={updating}
         error={updateError}
         update={updateAbstract}
      />
   )
   return (
      <div style={Styles.dashboard}>
         <div style={Styles.dashboard.header}>
            <Title>{getTitle()}</Title>
            <Button
               style={{ width: '280px' }}
               name={getButtonName()}
               onClick={getAction()}
            />
         </div>
         <div style={Styles.dashboard.content}>
            {loadError && (
               <Alert type='ERROR_MESSAGE'>{loadError.message}</Alert>
            )}
            {loading && <h1>loading...</h1>}
            {action === 'LIST' && renderListAbstract}
            {action === 'CREATE' && renderCreateAbstract}
            {action === 'VIEW' && renderViewAbstract}
            {abstractFile && action === 'EDIT' && renderEditAbstract}
         </div>
      </div>
   )
}

export default Abstracts
