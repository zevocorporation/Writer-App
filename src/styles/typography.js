import Colors from './colors'

export default function Typography(props, category) {
  const styles = {
    textDefault: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '3.5vh',
      margin: '0px',
      ...props.style,
    },
    textLight: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '3.5vh',
      margin: '0px',
      fontWeight: '100',
      ...props.style,
    },
    textBold: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '3.5vh',
      margin: '0px',
      fontWeight: '600',
      ...props.style,
    },
    titleDefault: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '5vh',
      margin: '0px',
      ...props.style,
    },
    titleLarge: {
      color: props.color ? props.color : Colors.accent.tertiary,
      fontSize: '6vh',
      margin: '0px',
      ...props.style,
    },
    label: {
      color: props.color ? props.color : Colors.accent.label,
      fontSize: '2vh',
      margin: '0px',
      ...props.style,
    },
    quote: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '3vh',
      margin: '0px',
      ...props.style,
    },
    link: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '2.5vh',
      margin: '5px',
      ...props.style,
    },
  }

  const selectText =
    (!props.type && styles.textDefault) ||
    (props.type === 'textLight' && styles.textLight) ||
    (props.type === 'textBold' && styles.textBold) ||
    (props.type === 'link' && styles.link)

  const selectTitle =
    (!props.type && styles.titleDefault) ||
    (props.type === 'titleLarge' && styles.titleLarge)

  const select = category === 'title' ? selectTitle : selectText

  return select
}
