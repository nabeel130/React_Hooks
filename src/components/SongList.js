import React , {useState} from 'react';
// import uuid from 'uuid/v1';
const { v4: uuidv4 } = require('uuid');

function SongList() {

    const [songs , setSongs] = useState([
        { title: 'almost home', id: 1},
        { title: 'memory gospe', id: 2},
        { title: 'this wild darkness', id: 3},
    ]);

    const addSong = () => {
        setSongs([...songs, {title: "new song" , id: uuidv4() }])
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <button onClick={addSong}>Add songs</button>
        </div>
    )
}

export default SongList
