export interface CheckboxProps {
    name: string;
    checked: boolean;
    onChange: (property: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    label?: string;
    className?: string;
}
