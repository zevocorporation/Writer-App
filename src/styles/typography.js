import Colors from './colors'

export default function Typography(props, category) {
  const styles = {
    textDefault: {
      fontFamily: 'default',
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: 14,
      lineHeight: 18,
    },
    textLight: {
      fontFamily: 'light',
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: 14,
      lineHeight: 18,
    },
    textBold: {
      fontFamily: 'bold',
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: 14,
      lineHeight: 25,
    },
    titleDefault: {
      fontFamily: 'bold',
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: 22,
      lineHeight: 25,
    },
    titleLarge: {
      fontFamily: 'bold',
      color: props.color ? props.color : Colors.accent.tertiary,
      fontSize: 22,
      lineHeight: 25,
    },
    label: {
      fontFamily: 'default',
      color: props.color ? props.color : Colors.accent.label,
      fontSize: 22,
      lineHeight: 18,
    },
    quote: {
      fontFamily: 'default',
      color: props.color ? props.color : Colors.accent.primary,
      fontSize: 18,
    },
  }

  const selectText =
    (!props.type && styles.textDefault) ||
    (props.type === 'textLight' && styles.textLight) ||
    (props.type === 'textBold' && styles.textBold)

  const selectTitle =
    (!props.type && styles.titleDefault) ||
    (props.type === 'titleLarge' && styles.titleLarge)

  const select = category === 'title' ? selectTitle : selectText

  return select
}
