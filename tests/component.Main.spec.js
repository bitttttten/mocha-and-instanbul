import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Main from '../app/components/Main'

const title = "some title"

const wrapper = shallow(<Main title={title} />)
const wrapperNoProps = shallow(<Main />)

describe('(Component) Main', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  })
  it('renders the fallback title when no props are passed', () => {
  	const titleFromNoProps = wrapperNoProps.find('h1').text()
    expect(titleFromNoProps).to.equal("Hello")
  })
  it('renders the title', () => {
  	const titleFromProps = wrapper.find('h1').text()
    expect(titleFromProps).to.equal(title)
  })
  it('renders two anchor buttons', () => {
  	expect(wrapper.find('a')).to.have.length(2)
  })
  it('renders a title', () => {
  	expect(wrapper.find('h1')).to.have.length(1)
  })
})
