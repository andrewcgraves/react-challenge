import React from 'react'
import Show from './Show'

const ShowList = props => {
  const results = props.data;
  let shows;

  //map over the results
  shows = results.map(show => <Show show={show.show} key={show.show.id}/> );
  console.log(shows);

  return(
    <ul>
      {(shows.length > 0) ? shows : `No Results...`}
    </ul>
  );
}

export default ShowList
