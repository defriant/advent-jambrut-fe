import { Image } from "@chakra-ui/react"
import { MAIN_BG } from "../assets"

function MainBackground() {
    return (
        <Image
            src={MAIN_BG}
            height='100%'
            width='100%'
            position='fixed'
            top='0'
            right='0'
            bottom='0'
            left='0'
            objectFit='cover'
            zIndex='-999'
        />
    )
}

export default MainBackground