import { Posts } from '@/data/posts'
import { API_URL } from '@/lib/axios'
import axios from 'axios'

export async function postLists(): Promise<Posts[]> {
    try {
        const response = await axios.get(`${API_URL}/api/posts`)
        return response.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function postById(id: number): Promise<Posts | null> {
    try {
        const response = await axios.get(`${API_URL}/api/posts/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
        return null
    }
}
