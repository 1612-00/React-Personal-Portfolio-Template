import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleReactLightBox from "simple-react-lightbox";

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightBox>
      <App />
    </SimpleReactLightBox>
  </React.StrictMode>,
  document.getElementById("root")
);
