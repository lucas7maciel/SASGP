
interface Accordion {
    title: string;
    content: string;
}

interface AccordionProps extends Accordion {
    index: number;
}