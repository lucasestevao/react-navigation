import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './NavigationItem.css'

class NavigationItem extends Component {
  static propTypes = {
    item: PropTypes.shape().isRequired,
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => {}
  }

  handleClick = (item) => (event) => {
    event.preventDefault()
    event.stopPropagation()

    const { onClick } = this.props

    onClick(item)
  }

  render() {
    const { item } = this.props

    const classes = classNames(
      'navigationItem',
      item.current ? 'navigationItem--current' : ''
    )

    return (
      <li className={classes} onClick={this.handleClick(item)}>
        <a href={`#${item.section}`}>{item.label}</a>
      </li>
    )
  }
}

export default NavigationItem
