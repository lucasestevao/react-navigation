import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import throttle from 'lodash/throttle'

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

  constructor(props) {
    super(props)
    const { navigationList } = props

    this.state = {
      navigationList,
      slidelineStyle: {}
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  getSlidelineStyle = element => {
    return element
      ? {
          width: element.clientWidth,
          marginLeft: element.offsetLeft
        }
      : {}
  }

  handleResize = throttle(() => {
    this.setState({
      slidelineStyle: this.getSlidelineStyle(this.state.currentElement)
    })
  }, 500)

  handleClick = (currentItem, element) => {
    const { onClick } = this.props
    const { navigationList } = this.state

    const newList = navigationList.map(item => ({
      ...item,
      current: item.section === currentItem.section
    }))

    this.setState({
      currentElement: element,
      navigationList: newList,
      slidelineStyle: this.getSlidelineStyle(element)
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
