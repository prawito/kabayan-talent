import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import IconSearch from '@material-ui/icons/Search';

const Search = styled.input`
  background-color: #ffffffa3;
  border-radius: 30px;
  width: 300px;
  height: 20px;
  box-shadow: 0 0 20px 0px black;
`;

const SearchBar = () => {
  return (
    <Fragment>
      <input style={{ Search }} type='text' placeholder='Search..'></input>
    </Fragment>
  );
};

export default SearchBar;
