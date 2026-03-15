'use client';

import Image from 'next/image';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #faf8f5;
  padding: 1rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: auto;
  }
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
      <LogoWrapper>
        <Image
          src="/logo.svg"
          alt="Lucy Colgan Studio"
          width={400}
          height={150}
          priority
        />
      </LogoWrapper>
      <ComingSoonText>Coming Soon</ComingSoonText>
    </PageWrapper>
  );
}

