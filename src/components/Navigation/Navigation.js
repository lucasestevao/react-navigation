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
      navigationList,
      slidelineStyle: {}
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

  handleClick = (currentItem, element) => {
    const { onClick } = this.props
    const { navigationList } = this.state

    const newList = navigationList.map(item => ({
      ...item,
      current: item.section === currentItem.section
    }))

    const DOMRect =  element.getBoundingClientRect()

    const style = {
      width: DOMRect.width,
      marginLeft: DOMRect.x
    }

    this.setState({
      navigationList: newList,
      slidelineStyle: style
    })

    onClick()
  }

  render() {
    const { customClass } = this.props
    const { navigationList, slidelineStyle } = this.state

    const classes = classNames('navigation', customClass)

    return navigationList ? (
      <nav className={classes}>
        <ul className="navigation__container">
          {navigationList.map(item => (
            <NavigationItem
              item={item}
              key={item.section}
              current={item.current}
              onClick={this.handleClick}
            />
          ))}
        </ul>
        <span className="navigation__slideline" style={slidelineStyle} />
      </nav>
    ) : (
      ''
    )
  }
}

export default Navigation
