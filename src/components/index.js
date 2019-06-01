import React, { Component } from "react";
import s from "./index.styl";
import Navigation from "./Navigation";
import TopBlock from "./TopBlock";
import BottomBlock from './BottomBlock';
import container from "./container";
import 'antd/dist/antd.css';
import data from '../json/data.js';

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
