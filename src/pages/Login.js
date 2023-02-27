import axios from 'axios'
import {useState} from 'react'
import {setToken, selectUserToken} from '../tokenSlice'
import {useSelector, useDispatch} from 'react-redux'


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [tempToken, storeToken] = useState('')
  //useSelector selects a state value from initial state
  const token = useSelector(selectUserToken)
  //dispatch defines the action that feeds into the reducer (ie, what are we doin here with this piece state?)
  const dispatch = useDispatch()
  console.log(token)
  async function login() {
    axios.post('http://localhost:3001/login', {
      username:username,
      password:password
    })
    .then(response => {
      console.log(response)
      console.log(response.data.token)
      if (response.data.token) {
       
      localStorage.setItem('token', response.data.token)
       console.log(localStorage.getItem('token'))
      }
    })
    .catch(error => setError(error))
  }
  
  console.log(localStorage.getItem)
  
  return (
    <div className='flex flex-col p-1 items-center'>
      <form>
          <div className='flex justify-center flex-col gap-2'>
            <div>
              <label for='username'>Username: </label>
              <input type='text' name='username' defaultValue={username} onChange={(e)=>setUsername(e.target.value)}></input>
            </div>
            <div>
              <label for='password'>Password: </label>
              <input type='password' name='password' defaultValue={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div className="justify-center flex bg-blue-100 rounded-md shadow-md"><button type='button' onClick={() => login()}>Login</button></div>
          </div>
        </form>
      <span></span>
    </div>
  )
}