import React, { lazy } from 'react'

const ArtAdd = lazy(() => import('../Article_add'))
const ArtRouterLists = [
    { path: '/index', element: <ArtAdd />, exact: true }
]
export default ArtRouterLists