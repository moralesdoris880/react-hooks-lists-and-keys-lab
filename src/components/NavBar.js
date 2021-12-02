import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>{getLink(links)}</nav>)
}

const getLink = (links)=> {
  return (links.map(onelink => {
    return (<a href={`#${onelink}`}>{onelink}</a>)
    }
  ))
}
export default NavBar;
