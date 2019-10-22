import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';

class AccordionEx extends Component {
  onAccordionChange = (obj) => {
    console.log(obj);
  }

  onAccordionItemExpended = (obj) => {
    console.log(obj);
  }

  onAccordionItemClosed = (obj) => {
    console.log(obj);
  }

  render() {
    const items = [1, 2, 3, 4, 5];
    return (
      <Accordion
        allowMultiple="true"
        onChange={obj => this.onAccordionChange(obj)}
      >
        {items.map((item) => {
          return (
            <AccordionItem
              title={`Item ${item}`}
              expanded={item === 1}
              onExpand={obj => this.onAccordionItemExpended(obj)}
              onClose={obj => this.onAccordionItemClosed(obj)}
            >
              <div>
                {`Item ${item} content`}
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  }
}

export default AccordionEx;
