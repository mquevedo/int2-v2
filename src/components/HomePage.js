// @flow
import React from 'react'
import styled from 'styled-components'

import {
  HomePageHeader,
  TimeLine,
  Alumni,
  CurrentInterns,
  Life,
  Partners,
  ComingBack,
  ApplyNow,
  Footer,
  Brands,
} from './'

export const HomePage = () => {
  return (
    <HomePageStyles>
      <HomePageHeader />
      <TimeLine/>
      <Alumni/>  
      <CurrentInterns/>
      <Life/>
      <Partners/>
      <ComingBack/>
      <ApplyNow/>
      <Brands />
      <Footer />
    </HomePageStyles>
  )
}

const HomePageStyles = styled.div`

`
