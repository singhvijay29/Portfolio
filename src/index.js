import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <div class="cursor"></div>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    <Analytics />
  </React.StrictMode>,
  document.getElementById("root")
);

var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px"
  );
});
