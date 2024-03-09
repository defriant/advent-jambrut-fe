import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MainBackground from '../components/MainBackground'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Footer from '../components/Footer'

function LayoutMain() {
    const [isOnTop, setIsOnTop] = useState<boolean>(true)

    const navbarControl: () => void = () => {
        if (window.scrollY > 1) {
            setIsOnTop(false)
        } else {
            setIsOnTop(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarControl)
        return () => window.removeEventListener('scroll', navbarControl)
    }, [])

    return (
        <Box
            transition='0.3s'
            width='100%'
            overflow='hidden'
        >
            <Navbar isOnTop={isOnTop} />
            <MainBackground />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default LayoutMain
