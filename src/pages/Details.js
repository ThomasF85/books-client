import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Details() {
  const [book, setBook] = useState();
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch("/book/" + id)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then(({ data }) => setBook(data))
      .catch((error) => {
        setError({
          error: true,
          message: error.message,
        });
        setBook();
      });
  }, []);

  function deleteBook() {
    fetch("/book/" + id, { method: "DELETE" })
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
      {error.error && <div>An error occured: {error.message}</div>}
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
