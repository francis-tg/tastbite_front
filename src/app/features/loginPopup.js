import { createSlice } from '@reduxjs/toolkit'

export const loginPopup = createSlice({
  name: 'loginPopup',
  initialState: {
    show_login: false,
  },
  reducers: {
    mutateLogin(state, _action){
        state.show_login = !state.show_login
    }
  },
})

// Action creators are generated for each case reducer function
export const { mutateLogin} = loginPopup.actions

export default loginPopup.reducer