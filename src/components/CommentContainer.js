import React from 'react'
import { commentsData } from '../utils/commentsData';
import CommentsList from './CommentsList';

const CommentContainer = () => {
  return (
    <div className='w-full'>
      <h1 className="font-bold my-5 text-xl">Comments:</h1>
      <div>
      <CommentsList data={commentsData}/>
      </div>
        
    </div>
  )
}

export default CommentContainer