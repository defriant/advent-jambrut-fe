import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import ROUTE from './route'
import ErrorPage from '../pages/ErrorPage'

const Home = lazy(() => import('../pages/Home/Home'))

function Router() {
    return (
        <Routes>
            <Route
                path={ROUTE.home}
                element={<Home />}
            />

            <Route
                path='/*'
                element={
                    <ErrorPage
                        code='404'
                        message='Page not found'
                        width='100%'
                        height='100vh'
                    />
                }
            />
        </Routes>
    )
}

export default Router
