import { BaseButton } from "Elements/Base/Button/BaseButton";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const EmptyDefault = styled.div`
  width: 100%;
  height: auto;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 30px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
  }
  button {
    margin-bottom: 30px;
  }
`;

const EmptyWithBg = styled(EmptyDefault)`
  background-image: url("/not_found_bg.jpg");
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Empties = () => {
  return (
    <EmptyWithBg>
      <h2>Oops...</h2>
      <p>Nothing was found for your request.</p>
      <Link href="/anime">
        <BaseButton>Go back</BaseButton>
      </Link>
    </EmptyWithBg>
  );
};

Empties.End = () => {
  return (
    <EmptyDefault>
      <h2>👀</h2>
      <p>The results with such a filter are over!</p>
      <Link href="/anime">
        <BaseButton>Go back</BaseButton>
      </Link>
    </EmptyDefault>
  );
};

export default Empties;
