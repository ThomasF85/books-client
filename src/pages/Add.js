import React from "react";

function AddPage() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "New Awesome Book",
      description: "Lorem...",
    }),
  };
  function postBook() {
    fetch("/books", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then(() => {
        alert("created");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div>
      <button onClick={postBook}>add</button>
    </div>
  );
}

export default AddPage;
