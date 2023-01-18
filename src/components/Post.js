export default function Post(props) {
  const [post, setPost] = props.post;

  return (
    <div className='post flex flex-col gap-1 shadow-md rounded-md'>
      <div className='flex justify-center subject'>
        <h3 className=''>{props.post.subject}</h3>
      </div>
        <p>{props.post.message}</p>
    </div>
  )
}