import React, { PureComponent } from 'react';
import styles from './Balance.styl';
import hIcon from 'media/h.svg';
import Content from 'components/Content/';

export default class Balance extends PureComponent {
  render() {
    return (
      <Content>
        <div className={styles.balance}>
          <div className={styles.capital}>Trading Capital</div>
          <div className={styles.info}>
            <div className={styles.tradeBalance}>1.00865 BTC</div>
            <div className={styles.details}>
              <div className={styles.item}>
                <div className={styles.text}>balance :</div>&nbsp;
                <div className={styles.amount}>10850</div>&nbsp;
                <img src={hIcon} className={styles.hIcon} alt="icon"/>
              </div>
              <div className={styles.item}>
                <div className={styles.text}>on hold :</div>&nbsp;
                <div className={styles.amount}>2400</div>&nbsp;
                <img src={hIcon} className={styles.hIcon} alt="icon"/>
              </div>
            </div>
          </div>
        </div>

      </Content>
    );
  }
}