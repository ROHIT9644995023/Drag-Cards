import React, { useRef, useState } from "react";
import Cards from "./Cards";

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"},
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap p-5">
      {data.map((item, index)=>(
        <Cards data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
