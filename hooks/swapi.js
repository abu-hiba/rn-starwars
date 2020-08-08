import { useState, useEffect } from 'react'

const uri = 'https://swapi.dev/api/'

const swapi = path =>
    fetch(`${uri}${path}`).then((res) =>
        res.status < 300 ? res.json()
            : res.json().then((result) => Promise.reject(result))
    )

export const useCharacters = () => {
    const [chars, setChars] = useState({ loading: true })

    const fetchChars = () =>
        swapi('people/')
            .then(({ results }) => setChars({ results, loading: false }))
            .catch(error => setChars({ error, loading: false }))

    return { chars, fetchChars }
}
