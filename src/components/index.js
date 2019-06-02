import React, { Component } from "react";
import s from "./index.styl";
import TopBlock from "components/TopBlock/";
import BottomBlock from 'components/BottomBlock/';
import container from "components/container";
import 'antd/dist/antd.css';

class App extends Component {
  componentDidMount() {
    this.props.getFromStorage();
  }

  render() {
    return (
      <div className={s.app}>
        <div className={s.container}>
          <TopBlock />
          <BottomBlock />
        </div>
      </div>
    );
  }
}

export default container(App);
