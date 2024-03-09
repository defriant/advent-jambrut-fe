import { useQuery } from "react-query"
import { listNewsApi } from "../../api/requests/news"

export const useNews = () => {
    return useQuery(
        'news', 
        listNewsApi,
        { enabled: false }
    )
}