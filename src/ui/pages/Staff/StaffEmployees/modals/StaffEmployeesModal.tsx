import React from 'react';
import { IdentifiersWizard } from 'ui/components/SetupWizard/Identifiers/IdentifiersWizard/IdentifiersWizard';
import { QuickIssueRfidWizard } from 'ui/components/SetupWizard/Identifiers/QuickIssueRfidWizard/QuickIssueRfidWizard';
import { QuickIssueFaceIdWizard } from 'ui/components/SetupWizard/Identifiers/QuickIssueFaceIdWizard/QuickIssueFaceIdWizard';
import { QuickIssue2dWizard } from 'ui/components/SetupWizard/Identifiers/QuickIssue2dWizard/QuickIssue2dWizard';
import EmployeeAdd from './EmployeeAdd/EmployeeAdd';
import EmployeeEdit from './EmployeeEdit/EmployeeEdit';
import EmployeeDelete from './EmployeeDelete/EmployeeDelete';
import EmployeeRestore from './EmployeeRestore/EmployeeRestore';

const StaffEmployeesModals = () => (
    <>
        <EmployeeAdd />
        <EmployeeEdit />
        <EmployeeDelete />
        <EmployeeRestore />

        <IdentifiersWizard />
        <QuickIssueRfidWizard />
        <QuickIssue2dWizard />
        <QuickIssueFaceIdWizard />
    </>
);

export default StaffEmployeesModals;
