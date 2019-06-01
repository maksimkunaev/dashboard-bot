import React, { PureComponent } from 'react';
import styles from './TopBlock.styl';
import TitleBar from 'components/TitleBar/'
import Balance from 'components/Balance/'
import Graph from 'components/Graph/'

export default class topBlock extends PureComponent {
  render() {
    return (
      <div className={styles.topBlock}>
        <TitleBar/>
        <Balance/>
        <Graph />
      </div>
    );
  }
}