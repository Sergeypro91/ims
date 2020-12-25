export interface CheckboxProps {
    name: string;
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
    label?: string;
    className?: string;
}
