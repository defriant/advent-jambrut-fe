import request from "../config"

type ArticleDetailApiProps = {
    articleId: string
}

export const listArticleApi = async () => {
    try {
        const res = await request.get('/articles')
        if (!res?.data?.error && res?.data?.data) return res?.data?.data 
        return 'error article list'
    } catch (err) {
        throw err
    }
}

export const articleDetailApi = async (props: ArticleDetailApiProps) => {
    try {
        const res = await request.get(`/articles/${props?.articleId}`)
        if (!res?.data?.error && res?.data?.data) return res?.data?.data 
        return 'error article detail'
    } catch (err) {
        throw err
    }
}