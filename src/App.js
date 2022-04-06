import React from "react";

import React360Viewer from "./React360Viewer";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4 card p-0">
          <React360Viewer
            amount={34}
            imagePath="https://rafatrestaurant.000webhostapp.com/barmeal/imgs/"
            // imagePath="https://markabte-static.s3.eu-central-1.amazonaws.com/180Test"
            fileName="frame{index}.jpg"
            spinReverse
            autoplay
            buttonClass="dark"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
