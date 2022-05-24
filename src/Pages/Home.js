/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import Chart from "../Componetns/Chart";
import * as Variable from "../Constants/Variables"
import logo from "../Assets/images/logo.svg"

const HomeCSS = css`
  margin: auto;
  background-color: #F7E9DC;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {

  }
`
const headerCSS = css`
  width: 45%;
  margin: .5rem auto;
  background-color: #EA755D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  color: ${Variable.FontColor};
  border-radius: ${Variable.BorderRadius};
  @media (max-width: 768px) {
    width: 90%;
  }
`
const leftSideHeader = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const mainCSS = css`
  width: 45%;
  margin: 20px auto;
  border-radius: ${Variable.BorderRadius};
  background-color: #FEFCF7;
  display: flex;
  flex-direction: column;
  padding: .5rem 1rem;

  @media (max-width: 768px) {
    width: 90%;
  }

  h5, h4,h2 {
    color: #342015
  }

  h6 {
    color: #B6B0AA
  }
`
const aboveMain = css`
  width: 90%;
  padding: .5rem 1rem;
`
const belowMain = css`
  border-top: ${Variable.Border};
  padding: 1rem 0;
  width: 90%;
  margin:0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`

function Home() {
    const [sum, setSum] = useState(0)
    return (
        <section css={HomeCSS}>
            <header css={headerCSS}>
                <div css={leftSideHeader}>
                    <h6>My balance</h6>
                    <h4>$921.48</h4>
                </div>
                <img src={logo} alt="logo"/>
            </header>
            <main css={mainCSS}>
                <h4 css={aboveMain}>Spending - Last 7 days</h4>
                <Chart setSum={setSum}/>
                <div css={belowMain}>
                    <div>
                        <h6>Total this month</h6>
                        <h2>${sum}</h2>
                    </div>
                    <div>
                        <h5>+2.4% </h5>
                        <h6>from last month</h6>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Home;
