export interface SwitchProps {
    isActive: boolean;
    isDisabled?: boolean;
    onTrigger: () => void | undefined;
}
