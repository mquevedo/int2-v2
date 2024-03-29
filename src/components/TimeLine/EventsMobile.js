import React, { Component } from 'react'
import styled from 'styled-components'
import { EventLeft } from './EventLeft'
import { EventRight } from './EventRight'
import data from '../../lib/timeline'

export class EventsMobile extends Component {
  render() {
    return (
      <Container>
        {/* <Line /> */}
        {
          data.map((section, index) => {
            return (index % 2) === 0
              ?
              <EventRight
                key={index}
                title={section.title}
                text={section.text}
              />
              :
              <EventLeft
                key={index}
                title={section.title}
                text={section.text}
              />
          })
        }
      </Container>
    )
  }
}

const Container = styled.div`
  ${'' /* position: absolute; */}
  ${'' /* border: 1px solid black; */}
  display: none;
  @media(max-width: 1023px) {
    ${'' /* display: block; */}
    display: inline;
  }
  margin: 0 auto;
  width: 80%;
  min-height: 100%;
  ${'' /* justify-content: center; */}
  ${'' /* align-items: center; */}
`