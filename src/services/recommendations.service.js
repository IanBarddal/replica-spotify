import { spotifyClient } from "../clients/spotifyClient.js"
import { historyServices } from "./history.service.js"

export const recommendationServices = {

    recommendArtists: async (accessToken) => {

        const recommendations = []

        const topArtists = await historyServices.getCurrentUserTopArtists(accessToken)

        const topTracks = await historyServices.getCurrentUserTopTracks(accessToken)

        const knownArtistsIds = new Set(topArtists.items.map(a => a.id))

        const trackArtists = topTracks.items.flatMap(t => t.artists)

        const seeds = [
            ...topArtists.items.slice(0, 3),
            ...trackArtists.slice(0, 5)
        ]

        for (const artist of seeds) {

            const result = await spotifyClient.get("/search", accessToken, {
                q: artist.name,
                type: "artist",
                limit: 5
            })

            recommendations.push(...result.artists.items)
        }

        const filtered = recommendations.filter(a => !knownArtistsIds.has(a.id))

        const unique = new Map()

        filtered.forEach(a => unique.set(a.id, a))

        let finalArtists = Array.from(unique.values())

        finalArtists = finalArtists.sort(() => Math.random() - 0.5)

        finalArtists = finalArtists.slice(0, 10)

        return finalArtists.map(a => ({
            id: a.id,
            name: a.name,
            image: a.images[0]?.url
        }))
    },

    recommendTracks: async (accessToken) => {

        const recommendations = []
        
        const topTracks = await historyServices.getCurrentUserTopTracks(accessToken)

        const knownTracksIds = new Set(topTracks.items.map(t => t.id))

        const seeds = topTracks.items.map(t => ({
            name: t.name,
            artist: t.artists[0].name
        }))

        for (const track of seeds.slice(0, 5)) {

            const result = await spotifyClient.get("/search", accessToken, {
                q: `artist:${track.artist}`,
                type: "track",
                limit: 5
            })

            recommendations.push(...result.tracks.items)
        }

        const filtered = recommendations.filter(t => !knownTracksIds.has(t.id))

        const unique = new Map()

        filtered.forEach(t => unique.set(t.id, t))

        let finalTracks = Array.from(unique.values())

        finalTracks = finalTracks.sort(() => Math.random() - 0.5)

        finalTracks = finalTracks.slice(0, 10)

        return finalTracks.map(t => ({

            id: t.id,
            name: t.name,
            artist: t.artists.map(a => a.name).join(", "),
            image: t.album.images[0]?.url
        }))
    }
}