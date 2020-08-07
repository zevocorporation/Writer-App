import React from 'react'
import { Card, Text, Icon } from '.'
import { DeleteIcon } from '../assets/assets'
import { useRouteMatch } from 'react-router-dom'
import { Colors } from '../styles/base/index'

function AbstractCard(props) {
   const { path } = useRouteMatch()

   async function open(e, id) {
      e.preventDefault()
      props.history.push(
         `${path}/node=${Math.floor(Math.random() * 10)}?id=${id}`
      )
   }
   async function deleteAbstract(id) {
      const res = await props.delete({ variables: { id: id } })
      if (res.data?.deleteAbstract) {
         props.history.push('/abstracts')
      }
   }

   const styles = {
      card: {
         cursor: 'pointer',
         padding: '32px',
         margin: '16px 0px',
         display: 'flex',
         flexDirection: 'row',
         width: '95%',
         alignItems: 'center',
         justifyContent: 'space-around',

         content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: '70%',
         },

         header: {
            display: 'flex',
            minHeight: '40px',
            width: '100%',
            alignItems: 'center',
         },

         block: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginRight: '80px',
         },
         info: {
            display: 'flex',
         },
         control: {
            width: '30%',
            justifyContent: 'space-around',
            display: 'flex',
         },
      },
   }

   const renderCard = (
      <Card key={props.key} style={styles.card}>
         <div
            style={styles.card.content}
            onClick={(e) => open(e, props.abstract._id)}
         >
            <div style={styles.card.header}>
               <Text
                  type='textBold'
                  style={{
                     fontSize: '18px',
                     color: Colors.accent.tertiary,
                     marginTop: '-32px',
                  }}
               >
                  {props.abstract.title}
               </Text>
            </div>
            <div style={styles.card.info}>
               <div style={styles.card.block}>
                  <Text style={{ fontSize: '14px', marginBottom: '8px' }}>
                     Subject
                  </Text>
                  <Text type='label' style={{ fontSize: '14px' }}>
                     {props.abstract.subject}
                  </Text>
               </div>
               <div style={styles.card.block}>
                  <Text style={{ fontSize: '14px', marginBottom: '8px' }}>
                     Created at
                  </Text>

                  <Text type='label' style={{ fontSize: '14px' }}>
                     {props.abstract.createdAt}
                  </Text>
               </div>
               <div style={styles.card.block}>
                  <Text style={{ fontSize: '14px', marginBottom: '8px' }}>
                     Last edited
                  </Text>
                  <Text type='label' style={{ fontSize: '14px' }}>
                     {props.abstract.updatedAt}
                  </Text>
               </div>
            </div>
         </div>
         <div style={styles.card.control}>
            <Icon
               onClick={() => deleteAbstract(props.abstract._id)}
               style={{ width: '32px' }}
               icon={DeleteIcon}
            />
         </div>
      </Card>
   )

   return renderCard
}

export default AbstractCard
