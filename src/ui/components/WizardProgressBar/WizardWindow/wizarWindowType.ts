export interface WizarWindowProps {
    header: string;
    index: number;
    children: React.ReactElement | HTMLElement | JSX.Element;
    isValid?: boolean;
}
