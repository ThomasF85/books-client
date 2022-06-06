import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

function Details() {
  const { id } = useParams();
  const [book, loading, error] = useFetch("/books/" + id);

  function deleteBook() {
    fetch("/books/" + id, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then(() => {
        alert("deleted");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <MainWrapper>
      {error && <div>An error occured: {error.message}</div>}
      {book && (
        <section>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <button onClick={deleteBook}>delete</button>
        </section>
      )}
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  margin: 2em auto;
`;

export default Details;
