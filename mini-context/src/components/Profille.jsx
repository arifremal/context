import React, { useContext } from 'react'
import userContext from '../context/UserContext'

function Profille() {
     const {user}= useContext(userContext)


 if (!user) return <div>pllease login</div>
 return <div>welcome{user.username}</div>
}

export default Profille