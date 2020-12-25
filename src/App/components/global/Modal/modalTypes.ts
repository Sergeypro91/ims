export interface ModalProps {
    modalName: string;
    modalHeader: string;
    modalClassName?: string;
    modalIcon?: string;
    successButtonLabel?: string | false;
    onSuccessClick?: () => void;
    succesDisabled?: boolean;
    denyButtonLabel?: string | false;
    onDenyClick?: () => void;
    cancelButtonLabel?: string | false;
    onCancelClick?: () => void;
    children?: React.ReactElement<any> | string;
}
