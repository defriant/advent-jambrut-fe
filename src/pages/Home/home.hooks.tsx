import { useQuery } from "react-query"
import { mainApi } from "../../api/requests/home"

export const useHome = () => {
    return useQuery(
        `main`, 
        () => mainApi(),
        { enabled: false }
    )
}