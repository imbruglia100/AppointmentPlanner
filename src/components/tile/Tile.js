import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container" style={{border:"1px solid black", padding:"10px", margin:"8px", borderRadius:"5px"}}>
      {Object.values(props.obj).map((text => {
        return <p className={props.key === 0 ? "tile-title" : "tile"}>{text}</p>
      }))}
    </div>
  );
};
