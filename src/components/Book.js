import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Book({ title, id }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <Link to={`/details/${id}`}>Details</Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 2em auto;
`;

export default Book;
