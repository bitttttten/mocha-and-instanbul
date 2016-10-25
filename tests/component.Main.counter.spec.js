import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Main from '../app/components/Main'

const wrapper = shallow(<Main />)

describe('(Component) Main counter', () => {
  it('renders the default counter state', () => {
  	expect(wrapper.state('counter')).to.equal(0)
  })
  it('simulates adding to the counter', () => {
  	wrapper.find('a#increase').simulate('click')
  	expect(wrapper.state('counter')).to.equal(1)
  })
  it('simulates removing from the counter', () => {
  	wrapper.find('a#decrease').simulate('click')
  	expect(wrapper.state('counter')).to.equal(0)
  })
})
