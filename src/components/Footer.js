import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterWrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/add">Add Book</Link>
          </li>
        </ul>
      </nav>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 2em;
  & nav > ul {
    display: flex;
    justify-content: space-around;
  }
`;
