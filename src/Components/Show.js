import React from 'react'

const Show = props => {

  let show = props.show
  let imageUrl;

  if (show.image !== null) {
    imageUrl = show.image.medium
    console.log(imageUrl);
  } else {
    console.log("null");
    
  }

  return(
    <div class="groupContainer">
      <div class="left">  
        <img class="movieImage" src={(imageUrl !== null) ? imageUrl : null} alt=""/>
      </div>
      <div>
        <body class="movieText">
          Name: {show.name} <br />
          {(show.rating.average !== null ? `Rating: ${show.rating.average}/10` : null)} <br/>
          {(show.runtime !== null ? `Runtime: ${show.runtime}` : null)} <br/>
          {(show.premiered !== null ? `Premiered: ${show.premiered}` : null)} <br/>


        </body>
        <body >
          {}
        </body>
      </div>
    </div>
  )
}

export default Show
