import { useState } from 'react'

const swapi = path =>
    fetch(path).then((res) =>
        res.status < 300 ? res.json()
            : res.json().then((result) => Promise.reject(result))
    )

export const useCharacters = () => {
    const [chars, setChars] = useState({ loading: true })

    const fetchChars = () =>
        swapi('https://swapi.dev/api/people/')
            .then(({ results }) => setChars({ results, loading: false }))
            .catch(error => setChars({ error, loading: false }))

    return { chars, fetchChars }
}

export const useFilm = path => {
    const [film, setFilm] = useState({ loading: true })

    const fetchFilm = () =>
        swapi(path)
            .then(details => setFilm({ details, loading: false }))
            .catch(error => setFilm({ error, loading: false }))

    return { film, fetchFilm }
}
