import { useQuery } from "react-query"
import { galleriesApi } from "../../api/requests/gallery"

export const useGalleries = () => {
    return useQuery(
        'galleries', 
        galleriesApi,
        { enabled: false }
    )
}