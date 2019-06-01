import React, { Component } from "react";
import s from "./index.styl";
import Navigation from "components/Navigation/";
import TopBlock from "components/TopBlock/";
import BottomBlock from 'components/BottomBlock/';
import container from "components/container";
import 'antd/dist/antd.css';
import data from 'json/data.js';

class App extends Component {
  render() {
    console.log(data);

    return (
        <div className={s.app}>
          <div className={s.container}>
            <TopBlock />
            <BottomBlock />
            <Navigation />
          </div>
        </div>
      );
  }
}

export default container(App);
