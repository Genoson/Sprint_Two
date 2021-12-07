import React from 'react'
import {useState} from 'react'

const Register = ({addUser}) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [hometown, setHometown] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userName === '' || password === '' || email === '' || firstname === '' || lastname === '' || hometown === '') {
            alert('Please fill out all fields')
            return
        } 
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }
        
        addUser({userName, password, email, firstname, lastname, hometown})

        setUserName('')
        setPassword('')
        setEmail('')
        setFirstname('')
        setLastname('')
        setHometown('')
        setConfirmPassword('')
        
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="UserName">User Name</label>
                <input type="text" name="UserName" id="UserName" onChange={(e)=>setUserName(e.target.value)}/>
                <label htmlFor="FirstName">First Name</label>
                <input type="text" name="FirstName" id="FirstName" onChange={(e)=>setFirstname(e.target.value)}/>
                <label htmlFor="LastName">Last Name</label>
                <input type="text" name="LastName" id="LastName" onChange={(e)=>setLastname(e.target.value)}/>
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" id="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="HomeTown">Home Town</label>
                <input type="text" name="HomeTown" id="HomeTown" onChange={(e)=>setHometown(e.target.value)}/>
                <label htmlFor="Password">Password</label>
                <input type="text" name="Password" id="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input type="text" name="ConfirmPassword" id="ConfirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <input className="submit" type="submit" value="Register" />
                <input className="clear" type="submit" value="Clear" />
            </form>
        </div>
    )
}

export default Register
