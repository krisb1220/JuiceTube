import React from 'react'
import Description from './Description.jsx'

export default function  Video(props) {
  let videoElements = new Map(props.state.items.map((item)=>{
    let element = <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    return [item.snippet.resourceId.videoId, element];
  }));

  return (
    <section>
      {videoElements.get(props.state.currentVideo)}
      {/* {videoElements.get("7aS7KStPgNA")} */}
    </section>
  )
}
