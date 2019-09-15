import React from 'react'
import styled from 'styled-components'
// Components
import TalentItem from '../../../components/molecules/TalentItem'

const MovieList = props => {
  return (
    <Container>
      <TalentItem />
      <TalentItem />
      <TalentItem />
      <TalentItem />
      <TalentItem />
      <TalentItem />
      <TalentItem />
      <TalentItem />
      <TalentItem />
      <TalentItem />
      <TalentItem />
    </Container>
  )
}

export default MovieList

const Container = styled.div`
  display: flex;
  flex-direction: row;
`