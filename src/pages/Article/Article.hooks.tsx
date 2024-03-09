import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { articleDetailApi } from "../../api/requests/article"

export const useArticle = () => {
    const { articleId }: any = useParams()
    return useQuery(
        `article-${articleId}`, 
        () => articleDetailApi({articleId}),
        { enabled: false }
    )
}