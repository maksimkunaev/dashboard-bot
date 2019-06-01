import React, { PureComponent } from 'react';
import cn from 'classnames';
import styles from './Bots.styl';
import Content from 'components/Content'

class Bot extends PureComponent {
  render() {
    return (
      <div className={styles.bot}>
        <div className={styles.botInner}>
          bot
        </div>
      </div>

    );
  }
}
const data = [1,2,3,4,5,6];

export default class Bots extends PureComponent {
  render() {
    return (
      <div className={styles.bots}>
        <Content style={{height: '100%'}}>
          <div className={styles.inner}>
            {data.map(bot => <Bot />)}
          </div>
        </Content>
      </div>

    );
  }
}