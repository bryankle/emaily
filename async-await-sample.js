// write a function to retrieve a blob of json
// make a ajax request. use the 'fetch' function.
// http://rallycoding.herokuapp.com/api/music_albums

// Using promises
// function fetchAlbums() {
//     fetch('http://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())
//         .then(json => console.log(json));
// }

// Using async/await
// async function fetchAlbums() {
//     const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     const json = await res.json()
//     console.log(json);
// }

// Async/await with arrow function
const fetchAlbums = async () => {
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    console.log(json);
}


fetchAlbums();