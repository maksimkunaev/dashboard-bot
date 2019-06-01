import React, { PureComponent } from 'react';
import cn from 'classnames';
import styles from './Balance.styl';
import { Icon } from 'antd';
import Content from 'components/Content';

const mainColor = '#546076';

export default class Balance extends PureComponent {
  render() {
    return (
      <Content>
        <div className={styles.balance}>
          <div className={styles.top}>Trading Capital</div>
          <div className={styles.bottom}>1.00865 BTC</div>
        </div>

      </Content>
    );
  }
}