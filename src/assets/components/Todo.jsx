import React, { useEffect } from 'react'
import { fetchTodo } from '../../Store/slice/TodoReduser'
import { useDispatch, useSelector } from 'react-redux'

export default function Todo() {

const dispatch=useDispatch()
const data = useSelector (state=>state.todo)

useEffect(()=>{
    dispatch(fetchTodo())
},[])
console.log(data);
  return (
    <div>
{
    data.isLoading? <h1>Loading</h1>:
    data.data.map(todo=>{
        return <p>{todo.title}</p>
    }
    )
}

    </div>
  )
}


