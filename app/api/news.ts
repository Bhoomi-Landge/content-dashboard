// pages/api/news.ts
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next'

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: { 'X-Api-Key': process.env.NEWS_API_KEY }
});

// let cachedData: any = null
// let lastFetched = 0

interface NewsSource {
    id: string | null
    name: string
}

interface NewsArticle {
    source: NewsSource
    author: string | null
    title: string
    description: string | null
    url: string
    urlToImage: string | null
    publishedAt: string
    content: string | null
}

interface NewsApiResponse {
    status: string
    totalResults: number
    articles: NewsArticle[]
}

let cachedData: NewsApiResponse | null = null
let lastFetched: number = 0

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const now = Date.now()

    if (cachedData && now - lastFetched < 60_000) {
        return res.status(200).json(cachedData)
    }

    try {
        const response = await newsApi.get<NewsApiResponse>('/top-headlines', {
            params: { country: 'in', category: 'general', page: 1, pageSize: 6 },
        })

        cachedData = response.data
        lastFetched = now

        res.status(200).json(cachedData)
    } catch (err: any) {
        console.error(err.response?.data || err.message)
        res.status(500).json({ error: 'Failed to fetch news' })
    }
}
