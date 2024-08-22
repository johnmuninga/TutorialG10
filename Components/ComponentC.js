import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Authentication } from './Tabs'

const ComponentC = () => {
    const {data} = useContext(Authentication)
  return (
    <View style={{flex:1}}>
      {
       data.length > 0 ? (data.map((item, index) => {
            return(
                <Text key={index}>{item.surname}</Text>
            )
        })):(

             <Text>No data available</Text>
        )
      }
    </View>
  )
}

export default ComponentC