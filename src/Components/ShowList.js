import React from 'react'
import Show from './Show'

const ShowList = props => {
  const results = props.data;
  let shows;
  if (true) {
    //map over the results
    shows = results.map(show => <Show show={show.show} key={show.show.id}/> );
    console.log(shows);
    
  } else {
    // TODO: no shows object
  }

  return(
    <ul>
      {shows}
    </ul>
  );
}

export default ShowList
