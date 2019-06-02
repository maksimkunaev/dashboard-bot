import React, { PureComponent } from 'react';
import Content from 'components/Content'
import styles from './Navigation.styl';
import { bind } from 'decko';
import container from "components/container";
import cn from 'classnames';
import { Icon } from 'antd';

class MenuItem extends PureComponent {
  render() {
    const { name, isActive, onClick, icon } = this.props;

    return (
      <li className={cn(styles.item, isActive && styles.active)} onClick={onClick}>
        <Icon type={icon} className={styles.icon}/>
        {name}
      </li>
    );
  }
}

class Navigation extends PureComponent {
  links = [
    { name: 'dashboard', icon: 'bars' },
    { name: 'megabot', icon: 'line-chart' },
    { name: 'bot market', icon: 'shopping-cart' },
    { name: 'coin prices', icon: 'dollar' },
    { name: 'profile', icon: 'setting' },
  ]

  @bind
  onMenuClick(name) {
    this.props.switchMenu(name);
  }

  render() {
    const { activeMenu } = this.props.currentConfig;

    return (
      <div className={styles.navigation}>
        <Content>
          <div className={styles.inner}>

            <ul className={styles.menu}>
              {this.links.map(link => {
                const isActive = activeMenu === link.name;

                return <MenuItem  key={link.name} {...link} onClick={this.onMenuClick.bind(this, link.name)} isActive={isActive}/>
              })}
            </ul>

          </div>
        </Content>
      </div>

    );
  }
}

export default container(Navigation);