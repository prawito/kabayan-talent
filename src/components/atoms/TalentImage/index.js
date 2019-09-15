import React from 'react'
import styled from 'styled-components'

const TalentImage = props => {
  const { src } = props
  return (
    <Container src={src} />
  )
}

export default TalentImage

const Container = styled.img`
  width: 141px;
  height: 212px;
  border-radius: 5px;
`