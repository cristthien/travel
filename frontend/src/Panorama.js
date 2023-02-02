import { useRef, useEffect } from "react";

function Panorama() {
  const ref = useRef();
  const style = { height: "100vh"};
useEffect(() => {
  new window.google.maps.StreetViewPanorama(ref.current, {
      position: { lat: 10.88320193437615, lng: 106.79575432888616 },
      pov: {
        heading: 34,
        pitch: 10,
      },
  });
});
return <div ref={ref} style={style} id="Panorama" />;
}

export default Panorama;