import React, { useEffect } from 'react'
import TaskItem from './TaskItem'
import { useSelector, useDispatch } from 'react-redux'
import { getTasksAsync, toggleIsLoading } from '../store/taskslice'

const TaskList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(toggleIsLoading())
    dispatch(getTasksAsync()).then(() => dispatch(toggleIsLoading()))
  }, [dispatch])
  const { allTasks } = useSelector((state) => state.tasks)
  console.log(allTasks)

  let taskItems
  if (allTasks && allTasks.length) {
    taskItems = allTasks.map((task) => {
      return <TaskItem key={task.id} task={task} />
    })
  } else {
    taskItems = null
  }

  return <div id='task-list'>{taskItems}</div>
}

export default TaskList
