import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const ACCESS_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQzNjk0NzksIm5iZiI6MTYyNDM2OTQ3OSwianRpIjoiYjk5OTczNzktNTY5Zi00NGQzLTg1ODktMjZiYjk5OWIxNzI5IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.xOCMLMFebVbIK1xgprZuKgxm8pdHgmz0RUrD_2I7Rvs'

export const getUserAsync = createAsyncThunk('users/getUserAsync', async () => {
  const response = await fetch('https://stage.api.sloovi.com/team', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + ACCESS_TOKEN,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
  if (response.ok) {
    const responseData = await response.json()
    const { data } = responseData.results
    const users = data.filter((d) => d.user_status === 'accepted')
    return { users }
  } else {
    console.log('something went wrong')
  }
})

export const UserSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getUserAsync.fulfilled]: (state, action) => {
      return action.payload.users
    },
  },
})

export default UserSlice.reducer
