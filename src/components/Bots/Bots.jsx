import React, { PureComponent, Component } from 'react';
import styles from './Bots.styl';
import Content from 'components/Content'
import container from "components/container";
import { Container, Draggable } from 'react-smooth-dnd';
import { bind } from 'decko';
import BotIcon from './BotIcon';

class Bot extends PureComponent {
  render() {
    const { name, title, color } = this.props;

    return (
      <div className={styles.bot}>
        <div className={styles.botInner}>
          <BotIcon fill={color}/>
          {title}
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
    return (
      <div className={styles.bots}>
        <Content style={{height: '100%'}}>
          <div className={styles.inner}>

            <Container onDrop={this.onDrop} >
              {bots.map(bot => {
                return (
                  <Draggable key={bot.name}>
                    <Bot {...bot}/>
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