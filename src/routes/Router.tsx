import { lazy } from 'react'
import ROUTE from './route'
import ErrorPage from '../pages/ErrorPage'
import LayoutMain from '../layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home/Home'))

function Router() {
    return (
        <Routes>
            <Route element={<LayoutMain />}>
                <Route
                    path={ROUTE.home}
                    element={<Home />}
                />
            </Route>

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
