import React from 'react'
import { useDispatch } from 'react-redux'
import { addTaskToEdit, toggleForm } from '../store/taskslice'
import { MdEdit, MdNotificationsPaused, MdCheck } from 'react-icons/md'
import { ImUser } from 'react-icons/im'
import ReactTooltip from 'react-tooltip'
import moment from 'moment'

const TaskItem = ({ task }) => {
  const dispatch = useDispatch()

  const editTaskHandler = () => {
    dispatch(addTaskToEdit(task))
    dispatch(toggleForm())
  }

  return (
    <div className='media align-items-center m-3 p-2 border rounded'>
      <span style={{ width: '30px' }}>
        <ImUser />
      </span>

      <div className='media-body'>
        <h5 className='small font-weight-bold mb-0'>{task.task_msg}</h5>
        <p className='m-0 small'>
          {moment(task.task_date).format('DD/MM/YYYY')}
        </p>
      </div>
      <div className='media-action ml-3'>
        <button
          className='btn btn-light btn-sm border'
          onClick={editTaskHandler}
          data-tip
          data-for='editingTask'
        >
          <MdEdit />
        </button>
        <ReactTooltip id='editingTask' type='dark' effect='solid'>
          <span>Edit This Task</span>
        </ReactTooltip>
        <div className='btn-group ml-2'>
          <button className='btn btn-light btn-sm border'>
            <MdNotificationsPaused />
          </button>
          <button className='btn btn-light btn-sm border'>
            <MdCheck />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
