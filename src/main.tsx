import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import RouteProvider from './routes/RouteProvider'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

console.log(theme)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouteProvider>
            <ChakraProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </ChakraProvider>
        </RouteProvider>
    </React.StrictMode>,
)
