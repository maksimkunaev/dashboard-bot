import React, { PureComponent } from 'react';
import Content from 'components/Content'
import styles from './Time.styl';

export default class Time extends PureComponent {
  render() {
    return (
      <Content>
        <div className={styles.navigation}>
          Time
        </div>
      </Content>
    );
  }
}