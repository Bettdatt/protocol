import * as _ from 'lodash/core';
import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from 'ts/style/colors';

import { Link } from 'ts/@next/components/button';
import { ChapterLink } from 'ts/@next/components/chapter_link';
import { Column, Section, Wrap } from 'ts/@next/components/layout';
import { SiteWrap } from 'ts/@next/components/siteWrap';
import { Heading, Paragraph } from 'ts/@next/components/text';

interface TeamMember {
    name: string;
    title: string;
    imageUrl?: string;
}

const team: TeamMember[] = [
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
];

const advisors: TeamMember[] = [
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
    {
        name: 'Will Warren',
        title: 'Co-Founder and CEO',
        imageUrl: '#',
    },
];

const Member = ({ name, title, imageUrl }: TeamMember) => (
    <StyledMember>
        <svg width="184" height="184" viewBox="0 0 184 184" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="184" height="184" fill="#003831"/></svg>
        <Heading color={colors.textDarkPrimary} size="small" isNoMargin={true}>{name}</Heading>
        <Paragraph isMuted={0.5}>{title}</Paragraph>
    </StyledMember>
);

export const NextAboutTeam = () => (
  <SiteWrap theme="light">
    <Section isPadLarge={true}>
      <Wrap>
          <Column colWidth="1/3">
             <ChapterLink to="/next/about/mission">Our Mission</ChapterLink>
             <ChapterLink to="/next/about/team">Team</ChapterLink>
             <ChapterLink to="/next/about/press">Press</ChapterLink>
             <ChapterLink to="/next/about/jobs">Jobs</ChapterLink>
         </Column>

        <Column colWidth="2/3">
            <div style={{ maxWidth: '680px' }}>
                <Heading size="medium">We are a global, growing team</Heading>
                <Paragraph size="medium" marginBottom="60px">We are a distributed team with backgrounds in engineering, academic research, business, and design. The 0x Core Team is passionate about accelerating the adoption decentralized technology and believe in its potential to be an equalizing force in the world. Join us and do the most impactful work of your life.</Paragraph>
                <Link href="/mission" isNoBorder={true} isWithArrow={true}>Join the team</Link>
            </div>
        </Column>
      </Wrap>
    </Section>

    <Section>
      <Wrap>
        <Column colWidth="1/3">
            <Heading size="medium">0x Team</Heading>
        </Column>

        <Column colWidth="2/3">
            <Wrap isWrapped={true} isCentered={false}>
            {_.map(team, (info, index) => <Member key={`team-${index}`} name={info.name} title={info.title} />)}
            </Wrap>
        </Column>
      </Wrap>
    </Section>

    <Section bgColor="#F3F6F4">
      <Wrap>
        <Column colWidth="1/3">
            <Heading size="medium">Advisors</Heading>
        </Column>

        <Column colWidth="2/3">
        <Wrap isWrapped={true} isCentered={false}>
            {_.map(advisors, (info, index) => <Member key={`team-${index}`} name={info.name} title={info.title} />)}
        </Wrap>
        </Column>
      </Wrap>
    </Section>
  </SiteWrap>
);

const StyledMember = styled.div`
    width: calc(25% - 10px);
    margin-bottom: 10px;

    img, svg {
        width: 100%;
        height: auto;
        object-fit: contain;
        margin-bottom: 10px;
    }
`;
