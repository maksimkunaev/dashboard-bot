import React, { PureComponent } from 'react';
import styles from './TitleBar.styl';
import { Icon } from 'antd';
import Content from 'components/Content/';

const mainColor = '#546076';

export default class TitleBar extends PureComponent {
  render() {
    return (
        <Content>
          <div className={styles.titleBar}>
            <Icon type="menu" style={{color: mainColor}}/>
            <h1 className={styles.title}>Dashboard</h1>
            <Icon type="sync" style={{color: mainColor }}/>
          </div>

        </Content>

    );
  }
}