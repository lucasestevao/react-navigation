import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import navigationList from '../../utils/navigationList'

describe('<Navigation />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<Navigation navigationList={navigationList.cities}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
