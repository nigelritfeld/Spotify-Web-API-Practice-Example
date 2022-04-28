require('dotenv').config()
const { fetch } = require('native-fetch')
const {spotify_api, api_version} = process.env;
const {getAccessToken} = require('./token.js')

/**
 * Searches for tracks in spotify database
 * @param track String
 * @param artist String
 * @return {Promise<void>}
 */
async function getTracks({track,artist}) {
    try{
        const token = await getAccessToken()
        const response = await fetch(`${spotify_api}/${api_version}/search?q=track:${track}&artist:${artist}&type=track&include_external=audio`, {
            method:'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': `application/json`
            }
        })
        const data = await response.json()
        const tracks = await listTracks(data)
        console.log(tracks)
    }
    catch (e) {
        console.log(`Catch Error: ` + e.message )
    }
}

/**
 * Filters spotify response data
 * @param data
 * @return {*}
 */
function listTracks(data)
{
    // Mapping trough response data
    return data.tracks.items.map(({id, preview_url, href, name, artists}) => {
        // Artist data
        const featured = artists.map(({id, name, type}, index) =>{
            return name
        })
        // Search filtered result
        return {
            id,
            track: name,
            href: href,
            preview_url: preview_url,
            artists: featured,
        }
    })
}


getTracks({track: 'Three little birds', artist: 'Bob Marley'})
