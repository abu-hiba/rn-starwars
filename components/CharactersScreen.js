import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useCharacters } from '../hooks/swapi'

const CharactersScreen = ({ navigation }) => {
    const { chars, fetchChars } = useCharacters()

    useEffect(() => {
        fetchChars()
    }, [])

    return (
        <View>
            {chars.loading
                ? <Text>Loading...</Text>
                : <FlatList
                    data={chars.results}
                    renderItem={({ item }) => (
                        <Text
                            onPress={() => navigation.navigate('Details', item)}
                            key={item.name}
                            style={{ padding: 15 }}
                        >{item.name}</Text>
                    )}
                    />
            }
        </View>
    )
}

export default CharactersScreen