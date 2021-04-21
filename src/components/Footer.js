import React from "react";
import styled from "styled-components";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="links">
        <a target="_blank" href="https://github.com/SusanaAyala" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="mailTo:s.ayala@hotmail.co.uk" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="copyright-contact">
        
        
          <FontAwesomeIcon
            style={{
              display: "inline-block",
              margin: "0rem 0.5rem",
              fontSize: "1rem",
            }}
          />
          <p style={{ display: "inline-block", wordBreak: "break-all" }}>
          © 2020 Susie Ayala, London.
          </p>
        
        
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: #070707;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;
  a,
  p {
    color: red;
    font-size: 18px;
  }
  @media (max-width: 800px) {
    padding: 1rem 0rem;
  }
  a {
    text-decoration: none;
  }
  svg {
    font-size: 3rem;
    color: white;
  }
 
  .links {
    padding: 0;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    a {
      width: 30%;
      text-align: center;
      margin: 1rem 2rem;
    }
  }
`;

export default Footer;