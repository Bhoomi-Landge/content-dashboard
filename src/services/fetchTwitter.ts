import axios from 'axios'

const BEARER_TOKEN = process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN

const twitterApi = axios.create({
  baseURL: 'https://api.twitter.com/2',
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
})

export const fetchTweetsByHashtag = async (hashtag: string) => {
  const response = await twitterApi.get('/tweets/search/recent', {
    params: {
      query: `#${hashtag}`,
      'tweet.fields': 'author_id,created_at',
      max_results: 10,
    },
  })
  return response.data.data
}
