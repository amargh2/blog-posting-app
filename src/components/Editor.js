import {Editor} from '@tinymce/tinymce-react'
import {useState} from 'react'

export default function EditingPanel(){
  const [subject, setSubject] = useState('');
  const [content, sentContent] = useState('')

  return (
    <div>
      <form action='localhost:3000/posts/new' method='post'>
        <div className='flex flex-col'>
          <Editor apiKey ={process.env.TINY_MCE_API_KEY}></Editor>
          <button onClick={() => {}} className='rounded-md shadow-sm bg-cyan-200'>Submit Post</button>
        </div>
      </form>
    </div>
  
  )
}