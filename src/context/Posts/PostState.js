import React, { useReducer } from 'react'
import PostContext from './postContext'
import postReducer from './postReducer'

const PostState = (props) => {
  const initialState = {
    posts: [],
  }

  const [state, dispatch] = useReducer(postReducer, initialState)

  return <PostContext.Provider>{props.children}</PostContext.Provider>
}

export default PostState
