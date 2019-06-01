import React, { PureComponent } from 'react';
import Content from 'components/Content'
import styles from './Navigation.styl';

export default class Navigation extends PureComponent {
  render() {
    return (
      <Content>
        <div className={styles.navigation}>
          Navigation
        </div>
      </Content>
    );
  }
}