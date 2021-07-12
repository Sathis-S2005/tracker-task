import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleForm, emptyTaskToEdit } from '../store/taskslice'
import { BiPlus } from 'react-icons/bi'
import ReactTooltip from 'react-tooltip'
import AddTaskForm from './AddTaskForm'
import CardBody from '../UI/CardBody'
import Loading from '../UI/Loading'

import EditTaskForm from './EditTaskForm'
import TaskList from './TaskLists'

const Task = () => {
  const { showTaskForm, taskToEdit, isLoading, allTasks } = useSelector(
    (state) => state.tasks
  )

  const dispatch = useDispatch()

  const showTaskHandler = () => {
    dispatch(toggleForm())
    if (Object.keys(taskToEdit).length !== 0) {
      dispatch(emptyTaskToEdit())
    }
  }

  return (
    <div className='maintask'>
      <div className='card shadow-sm'>
        <div className='card-header d-flex justify-content-between align-items-center p-0'>
          <div className='pl-3'>
            <span className='font-weight-bold'>TASKS</span>
            <span className='text-muted ml-3'>
              {allTasks ? allTasks.length : 0}
            </span>
          </div>
          <div className='border-left'>
            <button
              onClick={showTaskHandler}
              className='btn btn-light rounded-0'
              data-tip
              data-for='newTask'
            >
              <BiPlus />
            </button>
            <ReactTooltip id='newTask' type='dark' effect='solid'>
              <span>Add New Task</span>
            </ReactTooltip>
          </div>
        </div>
        <CardBody>
          {showTaskForm ? (
            Object.keys(taskToEdit).length === 0 ? (
              <AddTaskForm />
            ) : (
              <EditTaskForm />
            )
          ) : (
            <TaskList />
          )}
          {isLoading ? <Loading /> : null}
        </CardBody>
      </div>
    </div>
  )
}

export default Task
