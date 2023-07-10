import React from 'react';
import styled from "styled-components";

const PageWrapper = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  min-height: 1px;
`

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`

const PageTitle = styled.div`
  padding: 20px 24px;
  font-size: 22px;
  color: ${({theme}) => theme.colors.contrastDark};
  border-bottom: 1px solid ${({theme}) => theme.colors.contrast};
`


export const PageLayout = ({title, children}: { title?: string, children: React.ReactNode }) => (
    <PageWrapper>
        <ContentWrapper>
            {title && <PageTitle>{title}</PageTitle>}
            {children}
        </ContentWrapper>
    </PageWrapper>
);
