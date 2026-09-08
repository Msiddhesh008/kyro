import { Navigate, useLocation } from 'react-router-dom'

import { useAppSelector } from '../../hooks/redux'

interface RequireAuthProps {
  children: React.ReactNode
}

export function RequireAuth({ children }: RequireAuthProps) {
  const token = useAppSelector((state) => state.auth.accessToken)
  const location = useLocation()

  if (!token) {
    return (
      <Navigate to="/login" replace state={{ from: location.pathname }} />
    )
  }

  return children
}
