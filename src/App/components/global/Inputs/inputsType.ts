export interface InputsType {
    name: string;
    onInputChange: (property: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    type: string;
    value: string;
    className?: string;
    label?: string;
    placeholder?: string;
    checked?: boolean;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    error?: boolean;
    icon?: boolean;
    min?: number;
    max?: number;
    list?: string[];
    validation?: string;
    validationTitle?: string;
    validationWarning?: (property: string) => void;
    autoFocus?: boolean;
}
