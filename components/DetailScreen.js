import React from 'react'
import { View, Text, FlatList } from 'react-native'

const DetailScreen = ({ route }) => {
    const { name, gender, birth_year, films } = route.params
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{name}</Text>
            <Text>Gender: {gender}</Text>
            <Text>Birth Year: {birth_year}</Text>
        </View>
    )
}

export default DetailScreen