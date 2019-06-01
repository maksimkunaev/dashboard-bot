import React, { PureComponent } from 'react';
import cn from 'classnames';
import styles from './TitleBar.styl';

export default class TitleBar extends PureComponent {
  render() {
    return (
      <div className={styles.titleBar}>
        TitleBar
      </div>
    );
  }
}