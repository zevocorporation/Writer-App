import React, { useReducer } from 'react'
import { useForm } from 'react-hook-form'
import {
   Switch,
   Route,
   useLocation,
   useHistory,
   useRouteMatch,
} from 'react-router-dom'

import {
   ListAbstracts,
   CreateAbstract,
   ViewAbstract,
   EditAbstract,
} from './components/index'

import { useQuery, useMutation } from '@apollo/react-hooks'
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
   const history = useHistory()
   const { path } = useRouteMatch()

   React.useEffect(() => {
      if (
         (state?.myAbstracts?.length === 0 ||
            state?.myAbstracts?.length === undefined) &&
         (state?.isAdded || state?.isUpdated || state?.isRemoved)
      ) {
         window.location.reload()
      }
   })

   function useRouteQuery() {
      return new URLSearchParams(useLocation().search)
   }

   const routeQuery = useRouteQuery()

   const { loading, error: loadError } = useQuery(LOAD_ABSTRACTS, {
      errorPolicy: 'all',
      onCompleted({ getUserAbstracts }) {
         dispatch({
            type: 'LOAD_ABSTRACTS',
            payload: getUserAbstracts,
         })
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
   const { loading: opening, error: openError } = useQuery(OPEN_ABSTRACT_FILE, {
      errorPolicy: 'all',
      variables: { id: routeQuery.get('id') },

      onCompleted({ getUserAbstractDocument }) {
         dispatch({
            type: 'OPEN_ABSTRACT_FILE',
            payload: getUserAbstractDocument,
         })
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

   const renderAbstractRoutes = (
      <Switch>
         <Route path='/abstracts/edit/:abstractId'>
            <EditAbstract
               register={register}
               watch={watch}
               history={history}
               abstract={state?.abstractFile}
               loading={updating}
               error={updateError}
               update={updateAbstract}
            />
         </Route>
         <Route path='/abstracts/:abstractId'>
            <ViewAbstract
               register={register}
               watch={watch}
               history={history}
               abstract={state?.abstractFile}
               loading={opening}
               error={openError}
               update={updateAbstract}
               delete={deleteAbstract}
            />
         </Route>
      </Switch>
   )

   return (
      <Switch>
         <Route path='/abstracts/new/:abstractId'>
            <CreateAbstract
               register={register}
               watch={watch}
               loading={creating}
               error={createError}
               create={createAbstract}
               history={history}
            />
         </Route>
         <Route exact path='/abstracts'>
            <ListAbstracts
               history={history}
               delete={deleteAbstract}
               loading={loading}
               deleting={deleting}
               error={loadError || deleteError}
               abstracts={state?.myAbstracts}
            />
         </Route>
         {state?.abstractFile && renderAbstractRoutes}
      </Switch>
   )
}

export default Abstracts