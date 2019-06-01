import React, { PureComponent } from 'react';
import cn from 'classnames';
import styles from './TopBlock.styl';
import TitleBar from 'components/TitleBar'

export default class topBlock extends PureComponent {
  render() {
    return (
      <div className={styles.topBlock}>
        <TitleBar/>
      </div>

    );
  }
}