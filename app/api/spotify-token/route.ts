// app/api/spotify-token/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!
  const base64 = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${base64}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })

  const data = await res.json()
  return NextResponse.json(data)
}
