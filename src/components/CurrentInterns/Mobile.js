import React, { Component } from 'react'
import styled from 'styled-components'
import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'
import { InternLeft } from './InternLeft'
import { InternRight } from './InternRight'

export class Mobile extends Component {
  render() {
    return (
      <MapStyles className='current-interns' id='currentint2'>
        <StyledSlatInner className='current-interns__inner'>
          <h2 className='current-interns__title'>
            OUR CURRENT
          </h2>
          <h2 className='current-interns__title'>
            INT2 INTERNS
          </h2>
          <div className='current-interns__content'>
            <InternLeft
              bgImage='avatar--eduardo.png'
              title='Eduardo Chávez'
              text='Seattle, WA'
            />
            <InternRight
              bgImage='avatar--josue.png'
              title='Josué Morales'
              text='Seattle, WA'
            />
            <InternLeft
              bgImage='avatar--victor.png'
              title='Victor Flamenco'
              text='Chemnitz, Germany'
            />
            <InternRight
              bgImage='avatar--jose.png'
              title='José Maza'
              text='Chemnitz, Germany'
            />
          </div>
        </StyledSlatInner>
      </MapStyles>
    )
  }
}

const MapStyles = styled(StyledSlatOuter)`
  margin: 50px 0 0 0;
  height: 850px;
  display: block;
  overflow: hidden;
  @media(min-width: ${({ theme }) => theme.medium.start}) {
    display: none;
  }
  .current-interns {
    &__inner {
      overflow: hidden;
    }
    &__title {
      margin: 0 0 0 50px;
      text-align: left;
      color: ${({ theme }) => theme.blue};
      font-size: 2.4em;
    }
    &__content {
      padding-top: 50px;
    }
  }
`