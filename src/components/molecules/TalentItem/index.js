import React from 'react'
import styled from 'styled-components'
// Components
import TalentImage from '../../atoms/TalentImage'

const TalentItem = props => {
  return (
    <Container>
      <TalentImage src={require('../../../assets/dummy/talent1.jpg')} />
      <Info>
        <Title>#MoveOnAja</Title>
        <Category>Movie Comedy, Romance</Category>
      </Info>
    </Container>
  )
}

export default TalentItem

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  margin-right: 10px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
`

const Title = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 14px;
  font-weight: bold;
  color: #646464;
`

const Category = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 12px;
  color: #666666;
`
