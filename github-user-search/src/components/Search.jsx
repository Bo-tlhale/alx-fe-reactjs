import { useState } from 'react'

const Search = () => {
    const [username, setUsername] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username)
        setUsername('')
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter a github username'
                    autoComplete='false'
                />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}
export default Search;