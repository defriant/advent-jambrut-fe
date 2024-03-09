import request from "../config"

export const galleriesApi = async () => {
    try {
        const res = await request.get('/galleries')
        if (!res?.data?.error && res?.data?.data) return res?.data?.data 
        return 'error galleries list'
    } catch (err) {
        throw err
    }
}