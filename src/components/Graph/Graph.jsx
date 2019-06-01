import React, { PureComponent } from 'react';
import styles from './Graph.styl';

export default class Graph extends PureComponent {
  render() {
    return (
      <div className={styles.topBlock}>
        <span className={styles.percent}>+32,6%</span>
      </div>
    );
  }
}