import React from 'react'
import Colors from '../styles/colors'

function Statistics(props) {
  const styles = {
    statistics: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: Colors.primaryLight,
      maxWidth: '100%',
      minHeight: '28vh',
      padding: '16px',
      alignItems: 'center',
      ...props.style,
    },
  }
  const renderStatistics = <div style={styles.statistics}>stats</div>

  return renderStatistics
}

export default Statistics
