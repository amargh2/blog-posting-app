export default function sideBar() {
  return (
    <div className='sidebar p-1 flex flex-col gap-1'>
      <div className='bg-cyan-200 p-1 flex justify-center rounded-md shadow-md'>
        <button>New Post</button>
      </div>
      <div className='option bg-cyan-200 p-1 flex justify-center rounded-md shadow-md'>
        <button>View Posts</button>
      </div>
    </div>
  )
}