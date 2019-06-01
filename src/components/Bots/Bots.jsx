import React, { PureComponent, Component } from 'react';
import styles from './Bots.styl';
import Content from 'components/Content'
import container from "components/container";
import { Container, Draggable } from 'react-smooth-dnd';
import { bind } from 'decko';
import BotIcon from './BotIcon';

class Bot extends PureComponent {
  render() {
    const { title, color, timeUnit } = this.props;
    const data = this.props[timeUnit];
    const progressCLass = data > 0 ? styles.green : styles.red;

    return (
      <div className={styles.bot}>
        <div className={styles.botInner}>
          <BotIcon fill={color}/>
          <span className={styles.title}>{title}</span>
          <span className={progressCLass}>{data}%</span>
        </div>
      </div>
    );
  }
}

class Bots extends Component {
  @bind
  onDrop({addedIndex, removedIndex}) {
    this.props.changeBotsOrder({
      removedIndex,
      addedIndex
    })
  }
  render() {
    const { bots } = this.props.data;
    const { timeUnit } = this.props.currentConfig;

    return (
      <div className={styles.bots}>
        <Content style={{height: '100%'}}>
          <div className={styles.inner}>

            <Container onDrop={this.onDrop} >
              {bots.map(bot => {
                return (
                  <Draggable key={bot.name}>
                    <Bot {...bot} timeUnit={timeUnit}/>
                  </Draggable>
                );
              })}
            </Container>
          </div>
        </Content>
      </div>
    );
  }
}

export default container(Bots);