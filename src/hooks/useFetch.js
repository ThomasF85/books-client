import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: false,
  });

  useEffect(() => {
    setState((prevState) => ({
      data: prevState.data,
      error: null,
      loading: true,
    }));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then((prevState) => {
        setState({
          data: prevState.data,
          error: null,
          loading: false,
        });
      })
      .catch((error) => {
        setState((prevState) => ({
          data: prevState.data,
          error,
          loading: false,
        }));
      });
  }, [url]);

  return [state.data, state.loading, state.error];
}
