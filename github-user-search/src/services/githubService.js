import axios from 'axios'

const endpoint = 'https://api.github.com/users';

function fetchUserData({username}){
    try
    {
        const response = axios.get(`${endpoint}/${username}`);
        console.log(response.data);
        return response.data;
    }

    catch(error)
    {
        console.error('Error fetching user -> ', error);
        throw error;
    }
    
    finally
    {
        return(
            <>
                <p>Loading...</p>
            </>
        )
    }
}

