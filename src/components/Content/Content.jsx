import React, { PureComponent } from 'react';
import cn from 'classnames';
import styles from './Content.styl';
import { Icon } from 'antd';

export default class Content extends PureComponent {
  render() {
    return (
      <div className={styles.content} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}