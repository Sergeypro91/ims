export interface AccordionModuleesProps {
    header: string;
    activator: () => void;
    directionToEnter: () => void;
    directionToExit: () => void;
    delete: () => void;
    children: string | JSX.Element | HTMLElement;
    direction: string;
}
