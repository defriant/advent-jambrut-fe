import { useQuery } from "react-query"
import { listArticleApi } from "../../api/requests/article"

export const useArticles = () => {
    return useQuery(
        'articles', 
        listArticleApi,
        { enabled: false }
    )
}