import React from 'react'

import { Card, Text, Icon } from '.'
import { DeleteIcon } from '../assets/assets'

function AbstractCard(props) {
   async function deleteAbstract(e, _id) {
      e.preventDefault()
      props.delete({ variables: { id: _id } })
   }

   async function openDoc(e, _id) {
      e.preventDefault()
      props.open({ variables: { id: _id } })
   }

   const styles = {
      card: {
         cursor: 'pointer',
         margin: '16px 0px',
         boxShadow: '4px 1px 4px rgba(0, 0, 0, 0.08)',
         display: 'flex',
         flexDirection: 'column',
         width: '95%',
         alignItems: 'flex-start',
         justifyContent: 'space-around',

         content: {
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'cyan',
            width: '100%',
         },

         header: {
            display: 'flex',
            backgroundColor: 'grey',
            minHeight: '40px',
            width: '100%',
            alignItems: 'center',
         },

         block: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginRight: '80px',
            backgroundColor: 'purple',
         },
         info: {
            backgroundColor: 'pink',
            display: 'flex',
         },
         control: {
            backgroundColor: 'red',
            width: '30%',
            justifyContent: 'space-around',
            display: 'flex',
         },
      },
   }

   const renderCard = props.abstracts?.map((abstract) => (
      <Card
         onClick={(e) => openDoc(e, abstract._id)}
         key={abstract._id}
         style={styles.card}
      >
         <div style={styles.card.header}>
            <Text type='textBold' style={{ fontSize: '18px' }}>
               {abstract.title}
            </Text>
         </div>
         <div style={styles.card.content}>
            <div style={styles.card.info}>
               <div style={styles.card.block}>
                  <Text style={{ fontSize: '16px' }}>Subject</Text>
                  <Text style={{ fontSize: '14px' }}>{abstract.subject}</Text>
               </div>
               <div style={styles.card.block}>
                  <Text style={{ fontSize: '16px' }}>Created</Text>
                  <Text style={{ fontSize: '14px' }}>{abstract.createdAt}</Text>
               </div>
               <div style={styles.card.block}>
                  <Text style={{ fontSize: '16px' }}>Last edited</Text>
                  <Text style={{ fontSize: '14px' }}>{abstract.updatedAt}</Text>
               </div>
            </div>

            <div style={styles.card.control}>
               <Icon
                  onClick={(e) => deleteAbstract(e, abstract._id)}
                  style={{ width: '32px' }}
                  icon={DeleteIcon}
               />
            </div>
         </div>
      </Card>
   ))

   return props.abstracts ? renderCard : null
}

export default AbstractCard
