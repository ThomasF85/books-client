import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const [books, loading, error] = useFetch("/books");

  return (
    <MainWrapper>
      {loading && <div>Fetching...</div>}
      {error && <div>{error.message}</div>}
      <ul>
        {books?.map((book) => (
          <Book key={book.id} id={book.id} title={book.title} />
        ))}
      </ul>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  margin: 2em auto;
`;
