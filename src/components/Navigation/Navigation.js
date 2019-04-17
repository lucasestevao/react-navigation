import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import NavigationItem from './NavigationItem/NavigationItem'

import './Navigation.css'

class Navigation extends Component {
  static propTypes = {
    customClass: PropTypes.string,
    navigationList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onClick: PropTypes.func
  }

  static defaultProps = {
    customClass: '',
    onClick: () => {}
  }

  handleClick = () => {
    const { onClick } = this.props

    onClick()
  }

  render() {
    const { customClass, navigationList } = this.props

    const classes = classNames('navigation', customClass)

    return navigationList ? (
      <nav className={classes}>
        <ul>
          {navigationList.map(item => (
            <NavigationItem item={item} key={item.section} />
          ))}
        </ul>
        <span id="slide-line" />
      </nav>
    ) : (
      ''
    )
  }
}

export default Navigation
