import { Chrono } from "react-chrono";

function Timeline() {
  const items = [
    {
      title: "October 1998",
      cardTitle: "I was born",
      cardSubtitle: "Manila, Philippines",
      cardDetailedText: "The Phillipines was rough but I made it through",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1960",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];

  return (
    <div id="timeline">
      <div style={{ width: "100%", height: "100%", background: "transparent" }}>
        <Chrono items={items} mode="HORIZONTAL" />
      </div>
    </div>
  );
}

export default Timeline;
