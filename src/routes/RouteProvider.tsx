import { ReactNode, useLayoutEffect, useState, startTransition } from 'react'
import { Update, createBrowserHistory } from 'history'
import { Router as ReactRouter } from 'react-router-dom'

const history = createBrowserHistory()

type TRouteProvider = {
    children: ReactNode
    basename?: string
}

function RouteProvider({ children, basename }: TRouteProvider) {
    const [routeState, setRouteState] = useState({
        action: history.action,
        location: history.location,
    })

    useLayoutEffect(() => {
        history.listen((update: Update) => {
            startTransition(() => {
                setRouteState(update)
            })
        })
    }, [])

    return (
        <ReactRouter
            basename={basename}
            location={routeState.location}
            navigationType={routeState.action}
            navigator={history}
        >
            {children}
        </ReactRouter>
    )
}

export default RouteProvider
