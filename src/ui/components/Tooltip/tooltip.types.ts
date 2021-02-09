export default interface TooltipProps {
    id: string;
    type?: 'add' | 'delete' | 'edit' | 'filter' | 'quickFilter' | 'refresh' | 'showDeleted' | 'restore' | 'schedule' | 'import' | 'identifiersWizard' | 'QuickIssueRfid' | 'QuickIssueFaceId' | 'QuickIssue2d' | 'QuickIssueBiom' | 'videoControl';
    text?: string;
}
