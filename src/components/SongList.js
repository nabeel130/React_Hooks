import React , {useState} from 'react';
import NewSongForm from './NewSongForm';
// import uuid from 'uuid/v1';
const { v4: uuidv4 } = require('uuid');

function SongList() {

    const [songs , setSongs] = useState([
        { title: 'almost home', id: 1},
        { title: 'memory gospe', id: 2},
        { title: 'this wild darkness', id: 3},
    ]);

    const addSong = (title) => {
        setSongs([...songs, {title , id: uuidv4() }])
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
    )
}

export default SongList
