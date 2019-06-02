import React, { PureComponent } from 'react';
import Content from 'components/Content'
import styles from './Time.styl';
import container from "components/container";
import { bind } from 'decko'
import cn from 'classnames';

class Time extends PureComponent {
  range = [
    {key: '24h', name: '24h' },
    {key: '7d', name: '7 days' },
    {key: '30d', name: '30 days' },
    {key: 'all_time', name: 'All time' },
  ]

  @bind
  changeRange(key) {
    this.props.changeRange(key);
  }

  render() {
    const { timeUnit } = this.props.currentConfig;

    return (
      <Content>
        <div className={styles.time}>

          <div className={styles.range}>
            <div className={styles.title}>Time Range:</div>
            {
              this.range.map(unit => {
                return <button
                  key={unit.key}
                  className={cn(styles.unit, unit.key === timeUnit && styles.active)}
                  onClick={this.changeRange.bind(this, unit.key)}
                >
                  {unit.name}
                </button>
              })
            }
          </div>
        </div>
      </Content>
    );
  }
}

export default container(Time);