import React ,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const[Username,setUsername]=useState('')
    const [Password,SetPassword] = useState('') 
      const{setUser} =useContext(UserContext)

    const handleSubmit=(e)=>{
    //   e.preventDefault()
     setUser({Username,Password})

    }
  return (
    <div><h2>Login</h2>
    
    
    <input type='text' value={Username} onChange={(e)=>setUsername(e.target.value)} placeholder="username" />
    <input type='text'value={Password} onChange={(e)=>SetPassword(e.target.value)}  placeholder="password" />
    
    <button onClick={()=>handleSubmit()} >Login</button>
    
    
    </div>
  )
}

export default Login