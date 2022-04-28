## Spotify Web API Example

This example is made to learn more about object destruction.

#### Requirements:
- Spotify account (Premium not required)
- Spotify Client_ID
- Spotify Client_secret

### Spotify API Authorization

To get a spotify client id & secret, follow the instructions on the spotify developer documentation.
It will take 2 mins to get your credentials.
<br/>
<a href="https://developer.spotify.com/documentation/general/guides/authorization/app-settings/" >Spotify developer documentation</a>

### Usage
Copy the .env.example file to .env

```dotenv
client_id='<Client_ID>'
client_secret='<Client_Secret>'
spotify_api='https://api.spotify.com'
api_version='v1'
```

I created one function to search the spotify database for songs.
In the index.js file, pass an object with track title and artist name.

```js
getTracks({track: 'Three little birds', artist: 'Bob Marley'})
```

Next run

```bash
npm run start
```

#### Example response

The response should be an array with objects containing details about the found songs.

```js
[
  {
    id: '6A9mKXlFRPMPem6ygQSt7z',
    track: 'Three Little Birds',
    href: 'https://api.spotify.com/v1/tracks/6A9mKXlFRPMPem6ygQSt7z',
    preview_url: null,
    artists: [ 'Bob Marley & The Wailers' ]
  },
]

```
