export interface AccordionProps {
    type: string;
    header: string;
    checkbox?: () => void;
    disabled?: boolean;
    children: string | JSX.Element | HTMLElement;
    trigger?: () => void; // REQUIRED for type = selectable
    isChecked?: boolean;
}
