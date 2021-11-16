import React, { lazy } from 'react'
// import Login from '../pages/Login'

const Login = lazy(() => import('../pages/Login'))
const routrLists = [
    { path: '/login', element: <Login />, exact: true }
]
export default routrLists