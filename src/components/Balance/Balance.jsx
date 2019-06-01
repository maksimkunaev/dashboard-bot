import React, { PureComponent } from 'react';
import styles from './Balance.styl';
import hIcon from 'media/h.svg';
import Content from 'components/Content/';
import container from "components/container";

class Balance extends PureComponent {
  render() {
    const { trading_capital_currency, trading_capital, balance, on_hold } = this.props.data;

    return (
      <Content>
        <div className={styles.balance}>
          <div className={styles.capital}>Trading Capital</div>
          <div className={styles.info}>
            <div className={styles.tradeBalance}>{trading_capital} {trading_capital_currency}</div>
            <div className={styles.details}>
              <div className={styles.item}>
                <div className={styles.text}>balance :</div>&nbsp;
                <div className={styles.amount}>{balance}</div>&nbsp;
                <img src={hIcon} className={styles.hIcon} alt="icon"/>
              </div>
              <div className={styles.item}>
                <div className={styles.text}>on hold :</div>&nbsp;
                <div className={styles.amount}>{on_hold}</div>&nbsp;
                <img src={hIcon} className={styles.hIcon} alt="icon"/>
              </div>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

export default container(Balance);