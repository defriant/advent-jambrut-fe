import request from "../config"

type NewsDetailApiProps = {
    newsId: string
}

export const listNewsApi = async () => {
    try {
        const res = await request.get('/news')
        if (!res?.data?.error && res?.data?.data) return res?.data?.data 
        return 'error article list'
    } catch (err) {
        throw err
    }
}

export const newsDetailApi = async (props: NewsDetailApiProps) => {
    try {
        const res = await request.get(`/news/${props?.newsId}`)
        if (!res?.data?.error && res?.data?.data) return res?.data?.data 
        return 'error article detail'
    } catch (err) {
        throw err
    }
}