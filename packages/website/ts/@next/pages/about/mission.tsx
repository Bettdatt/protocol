import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { Link } from 'ts/@next/components/button';
import { ChapterLink } from 'ts/@next/components/chapter_link';
import { Icon } from 'ts/@next/components/icon';
import { Image } from 'ts/@next/components/image';
import { Column, Section, Wrap } from 'ts/@next/components/layout';
import { Separator } from 'ts/@next/components/separator';
import { SiteWrap } from 'ts/@next/components/siteWrap';
import { Heading, Paragraph } from 'ts/@next/components/text';

export const NextAboutMission = () => (
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
            <div style={{ maxWidth: '680px '}}>
                <Heading size="medium">Creating a tokenized world where all value can flow freely.</Heading>
                <Paragraph size="medium" marginBottom="60px">0x Protocol is an important infrastructure layer for the emerging crypto economy and enables markets to be created that couldn't have existed before. As more assets become tokenized, public blockchains provide the opportunity to establish a new financial stack that is more efficient, transparent, and equitable than any system in the past.</Paragraph>
                <Link href="/mission" isNoBorder={true} isWithArrow={true}>Our missions and values</Link>
            </div>
        </Column>
      </Wrap>
    </Section>

    <Section isFullWidth={true} isNoPadding={true}>
        <Wrap width="full">
            <Image src="/images/@next/about/about-mission@2x.jpg" height="372" alt="" isCentered={true} />
        </Wrap>
    </Section>

    <Section isPadLarge={true}>
      <Wrap>
        <Column colWidth="1/3">
            <Heading size="medium">Core<br/>Values</Heading>
        </Column>

        <Column colWidth="2/3" isNoPadding={true}>
            <Wrap>
                <Column colWidth="1/4">
                    <Icon name="right-thing" size={120} />
                </Column>
                <Column colWidth="2/3" isFlexGrow={true}>
                    <Heading>Do The Right Thing</Heading>
                    <Paragraph isMuted={true}>We acknowledge the broad subjectivity behind doing “the right thing,” and are committed to rigorously exploring its nuance in our decision making. We believe this responsibility drives our decision making above all else, and pledge to act in the best interest of our peers, community, and society as a whole.</Paragraph>
                </Column>
            </Wrap>
            <Separator/>
            <Wrap>
                <Column colWidth="1/4">
                    <Icon name="consistently-ship" size={120} />
                </Column>
                <Column colWidth="2/3" isFlexGrow={true}>
                    <Heading>Consistently Ship</Heading>
                    <Paragraph isMuted={true}>Achieving our mission requires dedication and diligence. We aspire to be an organization that consistently ships. We set high-impact goals that are rooted in data and pride ourselves in consistently outputting outstanding results across the organization.</Paragraph>
                </Column>
            </Wrap>
            <Separator/>
            <Wrap>
                <Column colWidth="1/4">
                    <Icon name="long-term-impact" size={120} />
                </Column>
                <Column colWidth="2/3" isFlexGrow={true}>
                    <Heading>Focus on long-term Impact</Heading>
                    <Paragraph isMuted={true}>We anticipate that over time, awareness of the fundamentally disruptive nature of frictionless global exchange will cause some to see this technology as a threat. There will be setbacks, some will claim that this technology is too disruptive, and we will face adversity. Persistence and a healthy long-term focus will see us through these battles.</Paragraph>
                </Column>
            </Wrap>
        </Column>
      </Wrap>
    </Section>
  </SiteWrap>
);
