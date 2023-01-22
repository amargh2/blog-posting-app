import axios from 'axios'
import {useState} from 'react'
import {setToken} from '../tokenSlice'
import {useSelector, useDispatch} from 'react-redux'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  //useSelector selects a state value from initial state
  const token = useSelector((state) => state.userToken)
  //dispatch defines the action that feeds into the reducer (ie, what are we doin here with this piece state?)
  const dispatch = useDispatch()
  
  function login() {
    axios.post('http://localhost:3001/login', {
      username:username,
      password:password
    })
    .then(response => {
      if (response.data.token) {
        dispatch(setToken(response.data.token))
      }
    })
    .catch(error => setError(error))
  }
  
  
  return (
    <div className='flex flex-col'>
      <form>
        <div>
          <label for='username'>Username</label>
          <input type='text' name='username' defaultValue={username} onChange={(e)=>setUsername(e.target.value)}></input>
        </div>
        <div>
          <label for='password'>Password</label>
          <input type='password' name='password' defaultValue={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        </form>

        <button onClick={() => login()}>Login</button>
      <span></span>
    </div>
  )
}