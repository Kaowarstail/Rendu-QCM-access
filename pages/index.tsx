import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '../Composant';

const HomePage = () => {
  return (
    <div>
      <h1>My Accordion App</h1>
      <Accordion>
        <AccordionItem>
          <AccordionHeader>Section 1</AccordionHeader>
          <AccordionPanel>
            <p>Content for section 1</p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Section 2</AccordionHeader>
          <AccordionPanel>
            <p>Content for section 2</p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Section 3</AccordionHeader>
          <AccordionPanel>
            <p>Content for section 3</p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomePage;