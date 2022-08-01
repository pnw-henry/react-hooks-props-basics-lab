import React from "react";

function links(props) {
  return (
    <div id="Links">
      <h3>Links</h3>
      <a href={props.githubLink}>{props.githubLink}</a>
      <br></br>
      <a href={props.linkedinLink}>{props.linkedinLink}</a>
    </div>
  );
}

export default links;
