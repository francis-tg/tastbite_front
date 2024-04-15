import { configureStore } from '@reduxjs/toolkit'
import loginPopup from './features/loginPopup'

export default configureStore({
    reducer: {
      loginMutation: loginPopup
  },
})