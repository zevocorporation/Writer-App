import Colors from './colors'

export default function Typography(props, category) {
  const styles = {
    textDefault: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '22px',
      margin: '0px',
    },
    textLight: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '22px',
      margin: '0px',
      fontWeight: '100',
    },
    textBold: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '22px',
      margin: '0px',
      fontWeight: '600',
    },
    titleDefault: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '32px',
      margin: '0px',
    },
    titleLarge: {
      color: props.color ? props.color : Colors.accent.tertiary,
      fontSize: '58px',
      margin: '0px',
    },
    label: {
      color: props.color ? props.color : Colors.accent.label,
      fontSize: '22px',
      margin: '0px',
    },
    quote: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '22px',
      margin: '0px',
    },
    link: {
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: '14px',
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
