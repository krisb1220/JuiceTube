

import React from 'react'

export default function  Playlist(props) {

    let state = props.state;

    let handlePlaylistClick = function(event){
      console.log('click')
      console.log(event.currentTarget.id);
      props.setState((prev)=>{
        return {...prev, currentVideo: event.currentTarget.id}
      });
    }


    let buildPlaylistElements = function(video) {
      let title = `${video.snippet.title}`
      let channel = `${video.snippet.videoOwnerChannelTitle}`
      return (
        <div 
            onClick={handlePlaylistClick} 
            key={video.snippet.resourceId.videoId} 
            id={video.snippet.resourceId.videoId} 
            className="playlist--item">
          <img src={`${video.snippet.thumbnails.default.url}`} />
          <div className="item--description">
          <p>{title.trim()}</p>
          <p>{channel.trim()}</p>
            
          </div>
        </div>
      );
    }

    let playlistElements = state.items.map((video)=>{
      return buildPlaylistElements(video);
    });


  /*======================================
                # RENDER #
  ======================================*/

  return (
    <div>
      <h1>Playlist</h1>
      <section className="playlist">
        {playlistElements}
      </section>

    </div>
  )
}
