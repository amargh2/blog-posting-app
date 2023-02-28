import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'

export default function Editor() {
  const [postValue, setPostValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [response, setResponse] = useState()
  
  const submitPost = async () => {
    await axios.post('http://localhost:3001/posts/new', {
      subject:subjectValue,
      message: postValue
    })
    .then(response => setResponse(response.data.message) && console.log('the response stored in state is' + response))
    .catch(error => setResponse(error))
  }

  return (
    <div className>
        <form action="" method=''>
        <div>
          <div className='flex flex-col justify-center w-100'>
            <label for='subject'>
            </label>
          <input type='text' name='subject' placeholder="What's on your mind?" value={subjectValue} onChange={(e)=> setSubjectValue(e.target.value)}></input>
          </div>
        </div>

        <ReactQuill theme="snow" value={postValue} height={100} onChange={(e)=> setPostValue(e) && console.log(postValue)} />
        <div className='text-sm bg-blue-100 p-2 rounded-md shadow-md justify-center flex'>
          <button type='button' onClick={async () => submitPost()}>Submit Post</button>
        </div>
      </form>
      <div>{response}</div>
    </div>
  ) 
}