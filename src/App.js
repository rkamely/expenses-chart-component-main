/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {Global, css} from '@emotion/react'
import * as Variable from './Constants/Variables';
import Routes from "./Routes/AllRoutes";
// import "../public/Heebo-Thin.ttf";

function App() {

    const global = () => css`
      @font-face {
        font-family: "Heebo";
        src: local("Heebo"), url("Heebo-Bold.ttf") format("truetype");
      
      }

      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Heebo" ,sans-serif;
        text-decoration: none;
        direction: ltr;
        scroll-behavior: smooth;
        color: ${Variable.FontColor};

        :after :before {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        h1, h2, h3, h4, h5, h6, p {
          text-align: justify;
        }

        h1 {
          font-size: 3rem;
        }

        h2 {
          font-size: 2rem;

        }

        h3 {
          font-size: 1.5rem;
        }

        h4 {
          font-size: 1.3rem;
        }

        h5 {
          font-size: 1rem;
        }

        h6 {
          font-size: .7rem;
        }

        p {
          font-size: 1.8rem;
        }
      }
    `
    return (
        <React.Fragment>
            <Global styles={global}/>
            <Routes/>
        </React.Fragment>
    );
}

export default App;
