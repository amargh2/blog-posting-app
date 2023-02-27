import { Link } from "react-router-dom"
export default function sideBar() {
  return (
    <div className='sidebar flex gap-1 text-sm p-1 md:flex-col'>
      <Link to='/new'>
        <div className='bg-blue-100 px-7 flex justify-center rounded-md shadow-md'>
          <button>New Post</button>
        </div>
      </Link>
      <Link to='/posts'>  
        <div className='option bg-blue-100 px-7 flex justify-center rounded-md shadow-md'>
          <button>View Posts</button>
        </div>
      </Link>
      <Link to='/login'>  
        <div className='option bg-blue-100 px-7 flex justify-center rounded-md shadow-md'>
          <button>Login</button>
        </div>
      </Link>
    </div>
  )
}