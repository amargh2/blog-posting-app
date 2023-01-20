import axios from 'axios'
import {useState} from 'react'



export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [token, setToken] = useState('')
  
  async function login() {
    axios.post('http:/localhost:3000/', {
      username, password
    })
    .then(response => setToken(response))
    .catch(error => setError(error))
  }
  console.log(token)
  
  return (
    <div className='flex flex-col'>
      <form>
        <div>
          <label for='username'>Username</label>
          <input type='text' name='username'></input>
        </div>
        <div>
          <label for='password'>Password</label>
          <input type='password' name='password'></input>
        </div>
        <span>{error ?? error}</span>
        <button onClick={() => login()}>Login</button>
      </form>
      <span>{token ?? token}</span>
    </div>
  )
}