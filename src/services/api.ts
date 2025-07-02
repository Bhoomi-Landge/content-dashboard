import axios from 'axios'

export const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': process.env.NEXT_PUBLIC_NEWS_API_KEY as string, 
  },
})
