import { Colors } from '../base'

const Form = {
   backgroundColor: Colors.accent.secondary,
   display: 'flex',
   flexDirection: 'column',
   borderRadius: '8px',
   boxShadow: '1px 1px 60px rgba(0, 0, 0, 0.16)',
   width: '360px',
   height: 'fit-content',

   control: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '16px',
   },

   header: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '16px',
   },

   footer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
   },

   link: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },

   textControl: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'space-around',
      width: '100%',
      margin: '0px 0px 32px 0px',
   },

   textAreaInput: {
      minHeight: '200px',
      padding: '16px 0px',
   },
}

export default Form
