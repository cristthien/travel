import { useRef, useEffect } from "react";

function Panorama(fenway) {
  const position = fenway.fenway;
  const ref = useRef();
  const style = { height: "100vh"};
useEffect(() => {
  new window.google.maps.StreetViewPanorama(ref.current, {
      position,
      pov: {
        heading: 10,
        pitch: 0,
      },
      zoom:0.5,
      
  });
});
return <div ref={ref} style={style} id="Panorama" />;
}

export default Panorama;