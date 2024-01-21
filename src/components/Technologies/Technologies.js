import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>Front-End</ListContainer>
        <ListParagraph>
          Experience with<br />
          React.js and JavaScript
        </ListParagraph>

      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>Back-End</ListContainer>
        <ListParagraph>
          Experience with<br />
          Node.js and MongoDB
        </ListParagraph>

      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>UI/UX</ListContainer>
        <ListParagraph>
          Experience with<br />
          Tools like Figma
        </ListParagraph>

      </ListItem>
    </List>
  </Section>
);

export default Technologies;
