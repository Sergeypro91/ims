export interface RadioButtonProps {
    name: string;
    value: string | number;
    onChange: (property: any) => void;
    className?: string;
    state: any;
    disabled?: boolean;
}
