import gql from 'graphql-tag'

const CREATE_ABSTRACT = gql`
   mutation createAbstract(
      $title: String!
      $subject: String!
      $significance: String!
      $description: String!
      $knowledgeGap: String!
      $researchQuestion: String!
      $hypothesis: String!
      $majorTrends: String!
      $conclusion: String!
      $abstract: String!
   ) {
      createAbstract(
         abstractInput: {
            title: $title
            subject: $subject
            significance: $significance
            description: $description
            knowledgeGap: $knowledgeGap
            researchQuestion: $researchQuestion
            hypothesis: $hypothesis
            majorTrends: $majorTrends
            conclusion: $conclusion
            abstract: $abstract
         }
      ) {
         _id
         title
         createdAt
         updatedAt
         subject
      }
   }
`

const UPDATE_ABSTRACT = gql`
   mutation updateAbstract(
      $id: ID!
      $title: String!
      $significance: String!
      $description: String!
      $knowledgeGap: String!
      $researchQuestion: String!
      $hypothesis: String!
      $majorTrends: String!
      $conclusion: String!
      $abstract: String!
   ) {
      updateAbstract(
         updateAbstractInput: {
            _id: $id
            title: $title
            abstract: $abstract
            significance: $significance
            description: $description
            knowledgeGap: $knowledgeGap
            researchQuestion: $researchQuestion
            hypothesis: $hypothesis
            majorTrends: $majorTrends
            conclusion: $conclusion
         }
      ) {
         _id
      }
   }
`

const DELETE_ABSTRACT = gql`
   mutation deleteAbstract($id: ID!) {
      deleteAbstract(abstractId: $id) {
         _id
      }
   }
`

export { CREATE_ABSTRACT, UPDATE_ABSTRACT, DELETE_ABSTRACT }
