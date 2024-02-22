import Comment from "./Comment"

const CommentsList = ({data}) => {
 console.log(data,"data");
  return (
    <div className="px-1">
      {
        data && data.map((comment, index)=> <Comment key={index} name={comment.name} text={comment.text} data={comment.replies}/>)
      }
      
    </div>
  )
}

export default CommentsList