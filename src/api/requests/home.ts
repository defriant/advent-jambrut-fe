import request from "../config"

export const mainApi = async () => {
    try {
        const res = await request.get('/main')
        if (!res?.data?.error && res?.data?.data) return res?.data?.data 
        return 'error get home'
    } catch (err) {
        throw err
    }
}