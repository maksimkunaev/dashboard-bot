import React, { PureComponent } from 'react';
import styles from './BottomBlock.styl';
import Navigation from 'components/Navigation'
import Bots from 'components/Bots'
import Time from 'components/Time'

export default class BottomBlock extends PureComponent {
  render() {
    return (
      <div className={styles.bottomBlock}>
        <Bots/>
        <Time/>
        <Navigation/>
      </div>

    );
  }
}