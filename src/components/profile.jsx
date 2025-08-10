import React, { useContext } from 'react'
import UserContext from "../context/UserContext" ;

function Profile() {
   const { user } = useContext(UserContext) 
    if (!user) return <div>Not logged in Please login </div>; 

    return <div>Logged in as {user.username} {''} 
    Welcome {user.username}</div>
}

export default Profile 

// usko hasta dekh kar meine rona chod diya 
// use yaad karne ke liye meine sona chod diya
// or aana toh bhot log chahe meri zindagi mein
// par kya kre uske baad meine kisika hona chod diya --/
