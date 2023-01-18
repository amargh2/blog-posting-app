import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor() {
  const [value, setValue] = useState('');
  return (
    <div className>
        <form action="localhost:3000/posts/new" method='post'>
        <div>
          <div className='flex flex-col justify-center w-100'>
            <label for='subject'>
            </label>
          <input type='text' for='subject' placeholder="What's on your mind?"></input>
          </div>
        </div>

        <ReactQuill theme="snow" value={value} height={100} onChange={setValue} />
        <div className='text-sm bg-blue-100 p-2 rounded-md shadow-md justify-center flex'>
          <button type='submit'>Submit Post</button>
        </div>
      </form>
    </div>
  ) 
}