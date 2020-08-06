import gql from 'graphql-tag'

const LOAD_ABSTRACTS = gql`
   query {
      getUserAbstracts {
         _id
         title
         createdAt
         updatedAt
         subject
      }
   }
`

const OPEN_ABSTRACT_FILE = gql`
   query getUserAbstractDocument($id: ID!) {
      getUserAbstractDocument(abstractId: $id) {
         _id
         title
         createdAt
         updatedAt
         subject
         significance
         description
         knowledgeGap
         researchQuestion
         hypothesis
         majorTrends
         conclusion
         abstract
      }
   }
`

export { LOAD_ABSTRACTS, OPEN_ABSTRACT_FILE }
