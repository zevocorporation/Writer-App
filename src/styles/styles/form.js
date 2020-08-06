import { Colors } from '../base'

const Form = {
   backgroundColor: Colors.accent.secondary,
   display: 'flex',
   flexDirection: 'column',
   borderRadius: '8px',
   boxShadow: '1px 1px 60px rgba(0, 0, 0, 0.16)',
   maxWidth: '360px',
   height: 'fit-content',

   control: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '16px',
      backgroundColor: 'grey',
   },

   header: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '16px',
      backgroundColor: 'green',
   },

   footer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
      padding: '16px',
   },

   link: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'yellow',
   },

   textControl: {
      backgroundColor: 'purple',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'space-around',
      width: '100%',
   },
   textAreaInput: {
      minHeight: '200px',
      padding: '16px 0px',
   },
}

export default Form
