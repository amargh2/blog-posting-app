export default function Post(props) {
  //passing posts to an array because type fussiness (i should have used typescript)
  const [post, setPost] = [props.post];

  return (
    <div className='post flex flex-col gap-1 shadow-md rounded-md'>
      <div className='flex justify-center subject'>
        <h3 className='p-2'>{props.post.subject}</h3>
      </div>
        <p>{props.post.message}</p>
    </div>
  )
}