import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Authentication } from './Tabs'

const ComponentB = () => {
    const {data} = useContext(Authentication)
    
  return (
    <View style={{flex:1}}>
      {
       data.length > 0 ? (data.map((item, index) => {
            return(
                <Text key={index}>{item.name}</Text>
            )
        })):(

             <Text>No data available</Text>
        )
      }
    </View>
  )
}

export default ComponentB