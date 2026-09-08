/** Future API: POST /auth/login, POST /auth/register, GET /auth/me */

export type UserRole = 'donor' | 'fundraiser' | 'ngo' | 'admin'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  createdAt: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
  role: Extract<UserRole, 'donor' | 'fundraiser'>
}

export interface AuthResponse {
  user: User
  accessToken: string
}
