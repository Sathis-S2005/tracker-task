import { configureStore } from '@reduxjs/toolkit'
import users from './userslice'
import tasks from './taskslice'

export default configureStore({
  reducer: {
    users,
    tasks,
  },
})
