import { Colors } from './index'

export default function Typography(props, category) {
   const styles = {
      textDefault: {
         color: props.color ? props.color : Colors.accent.primary,
         fontSize: '16px',
         margin: '0px',
         ...props.style,
      },
      textLight: {
         color: props.color ? props.color : Colors.accent.primary,
         fontSize: '16px',
         margin: '0px',
         fontWeight: '100',
         ...props.style,
      },
      textBold: {
         color: props.color ? props.color : Colors.accent.primary,
         fontSize: '16px',
         margin: '0px',
         fontWeight: '600',
         ...props.style,
      },
      titleDefault: {
         color: props.color ? props.color : Colors.accent.primary,
         fontSize: '22px',
         margin: '0px',
         ...props.style,
      },
      titleLarge: {
         color: props.color ? props.color : Colors.accent.tertiary,
         fontSize: '28px',
         margin: '0px',
         ...props.style,
      },
      label: {
         color: props.color ? props.color : Colors.accent.label,
         fontSize: '14px',
         margin: '0px',
         ...props.style,
      },
      quote: {
         color: props.color ? props.color : Colors.accent.primary,
         fontSize: '14px',
         margin: '0px',
         ...props.style,
      },
      link: {
         color: props.color ? props.color : Colors.accent.primary,
         fontSize: '14px',
         margin: '5px',
         cursor: 'pointer',
         ...props.style,
      },
   }

   const selectText =
      (!props.type && styles.textDefault) ||
      (props.type === 'textLight' && styles.textLight) ||
      (props.type === 'textBold' && styles.textBold) ||
      (props.type === 'link' && styles.link) ||
      (props.type === 'label' && styles.label)

   const selectTitle =
      (!props.type && styles.titleDefault) ||
      (props.type === 'titleLarge' && styles.titleLarge)

   const select = category === 'title' ? selectTitle : selectText

   return select
}
