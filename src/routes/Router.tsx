import { lazy } from 'react'
import ROUTE from './route'
import ErrorPage from '../pages/ErrorPage'
import LayoutMain from '../layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home/Home'))
const Gallery = lazy(() => import('../pages/Gallery/Galleries'))
const News = lazy(() => import('../pages/News/News'))
const NewsDetail = lazy(() => import('../pages/NewsDetail/NewsDetail'))
const Articles = lazy(() => import('../pages/Articles/Articles'))
const Article = lazy(() => import('../pages/Article/Article'))

function Router() {
    return (
        <Routes>
            <Route element={<LayoutMain />}>
                <Route
                    path={ROUTE.home}
                    element={<Home />}
                />
                <Route
                    path={ROUTE.gallery}
                    element={<Gallery />}
                />
                <Route
                    path={ROUTE.news}
                    element={<News />}
                />
                <Route
                    path={ROUTE.newsDetail}
                    element={<NewsDetail />}
                />
                <Route
                    path={ROUTE.articles}
                    element={<Articles />}
                />
                <Route
                    path={ROUTE.articleDetail}
                    element={<Article />}
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
