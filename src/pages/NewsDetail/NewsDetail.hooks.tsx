import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { newsDetailApi } from "../../api/requests/news"

export const useNewsDetail = () => {
    const { newsId }: any = useParams()
    return useQuery(
        `article-${newsId}`, 
        () => newsDetailApi({newsId}),
        { enabled: false }
    )
}