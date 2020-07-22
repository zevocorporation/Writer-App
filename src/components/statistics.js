import React, { useContext } from 'react'
import Title from './title'
import Text from './text'

import Card from './card'
import Colors from '../styles/colors'

import { DeviceContext } from '../App'
function Statistics(props) {
  const device = useContext(DeviceContext)
  const styles = {
    statistics: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      maxWidth: device === 'mobile' ? '100%' : '60%',
      minHeight: '28vh',
      padding: '16px',
      alignItems: 'center',
      ...props.style,
    },
  }
  const renderStatistics = (
    <div style={styles.statistics}>
      <Card style={{ maxWidth: '100px', height: '80px' }}>
        <Title style={{ color: Colors.accent.tertiary }}>23+</Title>
        <Text style={{ fontSize: '16px' }}>abstracts created</Text>
      </Card>
      <Card style={{ maxWidth: '100px', height: '80px' }}>
        <Title style={{ color: Colors.accent.tertiary }}>12+</Title>
        <Text style={{ fontSize: '16px' }}>researchers joined</Text>
      </Card>
      <Card style={{ maxWidth: '100px', height: '80px' }}>
        <Title style={{ color: Colors.accent.tertiary }}>13+</Title>
        <Text style={{ fontSize: '16px' }}>analysis performed</Text>
      </Card>
    </div>
  )

  return renderStatistics
}

export default Statistics
