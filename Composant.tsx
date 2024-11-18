import React, { useState, ReactNode, FC, useRef, useEffect } from 'react';

interface AccordionProps {
  children: ReactNode[];
}

interface AccordionItemProps {
  isOpen: boolean;
  onToggle: () => void;
  id: string;
  children: ReactNode;
}

interface AccordionHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
  id: string;
  children: ReactNode;
}

interface AccordionPanelProps {
  isOpen: boolean;
  id: string;
  children: ReactNode;
}

const Accordion: FC<AccordionProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion" style={{ color: 'black' }}>
      {children.map((child, index) => (
        <AccordionItem
          key={index}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          id={`accordion-item-${index}`}
        >
          {child}
        </AccordionItem>
      ))}
    </div>
  );
};

const AccordionItem: FC<AccordionItemProps> = ({ isOpen, onToggle, id, children }) => (
  <div className="accordion-item" style={{ color: 'black' }}>
    {React.Children.map(children, (child) =>
      React.isValidElement(child) ? React.cloneElement(child, { isOpen, onToggle, id }) : child
    )}
  </div>
);

const AccordionHeader: FC<AccordionHeaderProps> = ({ isOpen, onToggle, id, children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <button
      ref={buttonRef}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`${id}-panel`}
      id={`${id}-header`}
      className="accordion-header"
      style={{ color: 'black' }}
    >
      {children}
    </button>
  );
};

const AccordionPanel: FC<AccordionPanelProps> = ({ isOpen, id, children }) => (
  <div
    id={`${id}-panel`}
    role="region"
    aria-labelledby={`${id}-header`}
    hidden={!isOpen}
    className="accordion-panel"
    style={{ color: 'black' }}
  >
    {children}
  </div>
);

export { Accordion, AccordionItem, AccordionHeader, AccordionPanel };
