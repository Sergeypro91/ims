export interface AccordionProps {
    type: string;
    header: string;
    activator?: () => void;
    children: string | JSX.Element | HTMLElement;
    trigger: () => void; // REQUIRED for type = selectable
}
