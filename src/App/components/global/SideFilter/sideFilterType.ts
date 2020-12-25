export interface SideFilterProps {
    isOpen: boolean;
    onClose: () => void;
    iconName?: string;
    children?: JSX.Element | HTMLElement;
}
