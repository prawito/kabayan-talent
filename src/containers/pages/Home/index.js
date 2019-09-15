import React from 'react'
import styled from 'styled-components'
// Organisms
import MovieList from '../../organisms/MovieList'

const Home = () => {
  return (
    <Container>
      <p>Home Page</p>

      <MovieSegment>
        <WrapperTitle>
          <Title>Movie Showing Now</Title>
          <LinkSeeAll href="#">See All</LinkSeeAll>
        </WrapperTitle>
        <Subtitle>#DukungFilmIndonesia #SedangTayangSee All</Subtitle>
      </MovieSegment>
      <MovieList />
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const MovieSegment = styled.div``

const WrapperTitle = styled.div`
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 20px;
  font-weight: bold;
  color: #696969;
`

const LinkSeeAll = styled.a`
  font-size: 16px;
  color: #fc6921;
  text-decoration: none;
`

const Subtitle = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 14px;
  color: #76838e;
`
