import React from 'react'
import ReactDOM from 'react-dom'
import NavigationItem from './NavigationItem'
import navigationList from '../../../utils/navigationList'

describe('<NavigationItem />', () => {
  it('renders without crashing', () => {
    const ul = document.createElement('ul')

    ReactDOM.render(<NavigationItem item={navigationList.cities[0]} />, ul)
    ReactDOM.unmountComponentAtNode(ul)
  })
})
