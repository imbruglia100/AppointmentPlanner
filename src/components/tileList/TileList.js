import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      <ul>
        {props.obj.map((ele, index) => {
          return <Tile obj={ele} key={index}/>
        })}
      </ul>
    </div>
  );
};
