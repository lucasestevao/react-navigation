import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import NavigationItem from './NavigationItem/NavigationItem'

import './Navigation.css'

class Navigation extends Component {
  constructor(props) {
    super(props)
    const { navigationList } = props

    this.state = {
      navigationList
    }
  }

  static propTypes = {
    customClass: PropTypes.string,
    navigationList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onClick: PropTypes.func
  }

  static defaultProps = {
    customClass: '',
    onClick: () => {}
  }

  handleClick = currentItem => {
    const { onClick } = this.props
    const { navigationList } = this.state

    const newList = navigationList.map(item => ({
      ...item,
      current: item.section === currentItem.section
    }))

    this.setState(
      {
        navigationList: newList
      },
      onClick()
    )
  }

  render() {
    const { customClass } = this.props
    const { navigationList } = this.state

    const classes = classNames('navigation', customClass)

    return navigationList ? (
      <nav className={classes}>
        <ul>
          {navigationList.map(item => (
            <NavigationItem
              item={item}
              key={item.section}
              current={item.current}
              onClick={this.handleClick}
            />
          ))}
        </ul>
        <span className="navigation__slideline" />
      </nav>
    ) : (
      ''
    )
  }
}

export default Navigation
