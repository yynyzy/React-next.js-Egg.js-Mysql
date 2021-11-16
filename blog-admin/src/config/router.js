import React, { lazy } from 'react'
import Login from '../pages/Login'

const Admin = lazy(() => import('../pages/Admin'))
const routrLists = [
    { path: '/login', element: <Login />, exact: true },
    { path: '/admin', element: <Admin />, exact: true }
]
export default routrLists