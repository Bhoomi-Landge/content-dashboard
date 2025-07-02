// src/slices/contentSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

// Axios instance
export const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': process.env.NEXT_PUBLIC_NEWS_API_KEY || '',
  },
})

// Types
export interface TweetItem {
  id: string
  text: string
  author_id: string
  created_at: string
}

export interface NewsItem {
  url: string
  title: string
  description: string
  urlToImage: string
  publishedAt: string
  source: {
    name: string
  }
}

export interface SpotifyTrack {
  id: string
  name: string
  artists: { name: string }[]
  album: {
    release_date: string
    images: { url: string }[]
  }
}

export interface ContentState {
  news: NewsItem[]
  tweets: {
    items: TweetItem[]
  }
  spotify: {
    items: SpotifyTrack[]
  }
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  selectedCategory: string
  currentPage: number
  hasMore: boolean
}

const initialState: ContentState = {
  news: [],
  tweets: { items: [] },
  spotify: { items: [] },
  status: 'idle',
  error: null,
  selectedCategory: 'general',
  currentPage: 1,
  hasMore: true,
}

let lastFetchTime = 0

export const fetchNews = createAsyncThunk(
  'content/fetchNews',
  async ({ category, page }: { category: string; page: number }, { rejectWithValue }) => {
    const now = Date.now()
    if (now - lastFetchTime < 1000) {
      console.warn('🕒 Throttled: Too soon')
      return rejectWithValue('Too many requests')
    }

    lastFetchTime = now

    try {
      const res = await newsApi.get(`/top-headlines`, {
        params: {
          country: 'in',
          category,
          page,
          pageSize: 6,
        },
      })

      let articles = res.data.articles

      if (!articles.length) {
        const fallback = await newsApi.get(`/everything`, {
          params: {
            q: category,
            language: 'en',
            pageSize: 6,
            page,
          },
        })
        articles = fallback.data.articles
      }

      return articles
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch news')
    }
  }
)

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
      state.news = []
      state.currentPage = 1
      state.hasMore = true
    },
    setTweets: (state, action: PayloadAction<TweetItem[]>) => {
      state.tweets.items = action.payload
    },
    setSpotifyItems: (state, action: PayloadAction<SpotifyTrack[]>) => {
      state.spotify.items = action.payload
    },
    setNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.news = action.payload
      state.currentPage = 1
      state.hasMore = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (action.payload.length === 0 || state.currentPage >= 5) {
          state.hasMore = false
          return
        }
        state.news = [...state.news, ...action.payload]
        state.currentPage += 1
        state.hasMore = true
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { setCategory, setTweets, setSpotifyItems, setNews } = contentSlice.actions
export default contentSlice.reducer
