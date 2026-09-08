import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { User } from '../types/auth'

const TOKEN_KEY = 'kyro_access_token'
const USER_KEY = 'kyro_user'

function readToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY)
  } catch {
    return null
  }
}

function readUser(): User | null {
  try {
    const raw = localStorage.getItem(USER_KEY)
    return raw ? (JSON.parse(raw) as User) : null
  } catch {
    return null
  }
}

interface AuthState {
  accessToken: string | null
  user: User | null
}

const initialState: AuthState = {
  accessToken: readToken(),
  user: readUser(),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{ accessToken: string; user: User }>,
    ) {
      state.accessToken = action.payload.accessToken
      state.user = action.payload.user
      localStorage.setItem(TOKEN_KEY, action.payload.accessToken)
      localStorage.setItem(USER_KEY, JSON.stringify(action.payload.user))
    },
    clearCredentials(state) {
      state.accessToken = null
      state.user = null
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(USER_KEY)
    },
  },
})

export const { setCredentials, clearCredentials } = authSlice.actions
export const authReducer = authSlice.reducer
