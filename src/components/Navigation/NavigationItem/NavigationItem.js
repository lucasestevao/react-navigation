import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NavigationItem.css'

class NavigationItem extends Component {
  static propTypes = {
    item: PropTypes.shape().isRequired,
    onClick: PropTypes.func
  }

  static defaultProps = {
    customClass: '',
    onClick: () => {}
  }

  handleClick = event => {
    event.preventDefault()
    event.stopPropagation()

    const { onClick } = this.props

    onClick(event)
  }

  render() {
    const { item } = this.props

    return (
      <li className="navigationItem" onClick={this.handleClick}>
        <a href={`#${item.section}`}>{item.label}</a>
      </li>
    )
  }
}

export default NavigationItem
