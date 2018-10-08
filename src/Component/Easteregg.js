import React from "react";

function Easteregg(props) {
  return (
    <div>
      <img
        className="easteregg"
        src="http://cdn.shopify.com/s/files/1/1158/9490/products/C000001182-PAR-ZOOM_f7cf5241-a203-4e3e-8de9-c3556b7346f5_800x.jpeg?v=1524405066"
        onClick={props.egg}
      />
    </div>
  );
}
export default Easteregg;
