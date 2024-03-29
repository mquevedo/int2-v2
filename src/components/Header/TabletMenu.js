import React, { Component } from 'react'
import _ from 'lodash/fp'
import styled from 'styled-components'
import OuterStyledSection from '../StyledSlatOuter'
import InnerStyledSection from '../StyledSlatInner'
import MenuList from '../../lib/data'

export class TabletMenu extends Component<Props, State> {
  render() {
    return (
      <div>
        <DesktopMenuStyles className='desktop-menu__outer'>
          <InnerStyledSection className='desktop-menu__inner'>
            <div className='desktop-menu__logo' />
            <nav className='desktop-menu__nav-list'>
              {
                _.map((section) =>
                  <li key={section.id}>
                    <a
                      href={`${section.slug}`}
                      target={section.slug.startsWith('#') ? '_self' : '_blank'}
                      rel="noreferrer"
                    >
                      {section.title}
                    </a>
                  </li>
                )(MenuList)
              }
            </nav>
          </InnerStyledSection>
        </DesktopMenuStyles>
      </div>
    )
  }
}

const DesktopMenuStyles = styled(OuterStyledSection)`
  padding: 0;
  display: none;
  background-color: ${({ theme }) => theme.white};
  @media(min-width: ${({ theme }) => theme.medium.end}) {
    display: inline-block;
  }
  @media(min-width: ${({ theme }) => theme.large.start}) {
    display: none;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .desktop-menu {
    &__inner {
      display: flex;
      height: 100px;
    }

    &__logo {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 185px;
      height: 80px;
      background-image: url('${process.env.PUBLIC_URL}/images/logo--int2--tablet.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    &__nav-list {
      margin: 0 0 0 220px;
      width: 90%;
      list-style-type: none;
      display: flex;
      justify-content: space-evenly;
      padding: 0px;
      font-size: 0.95em;
      li {
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-decoration: none;
        color: ${({ theme }) => theme.black};
        font-weight: 800 !important;
        &:hover {
          color: ${({ theme }) => theme.blue};
        }
      }
    }
  }
`