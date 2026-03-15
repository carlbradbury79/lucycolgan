"use client";

import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #faf8f5;
  padding: 1rem;
`;

const Heading = styled.h1`
  font-family: Georgia, serif;
  font-size: 2rem;
  letter-spacing: 0.1em;
  color: #2c2c2c;
  text-align: center;
  margin-bottom: 2rem;
`;

const ComingSoonText = styled.p`
  font-family: Georgia, serif;
  font-size: 1rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #2c2c2c;
  text-align: center;
`;

export default function Home() {
  return (
    <PageWrapper>
      <Heading>lucycolgan.com</Heading>
      <ComingSoonText>Coming Soon</ComingSoonText>
    </PageWrapper>
  );
}
