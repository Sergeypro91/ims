export interface ImageLoaderProps {
    onChange?: (payload: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name?: string;
    className?: string;
    withoutInput?: boolean;
    onClick?: () => void;
}
