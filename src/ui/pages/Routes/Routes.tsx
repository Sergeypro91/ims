import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import Content from 'ui/pages/Content/Content';
import { Login } from 'ui/pages/Login/Login';
import { SecurityPostCentral } from 'ui/pages/SecurityPost/SecurityPostCentral/SecurityPostCentral';
import { SecurityAttendance } from 'ui/pages/SecurityPost/SecurityAttendance/SecurityAttendance';
import { SecurityPostMonitoring } from 'ui/pages/SecurityPost/SecurityPostMonitoring/SecurityPostMonitoring';
import EducationInstitutions from 'ui/pages/Education/EducationInstitutions/EducationInstitutions';
import EducationFaculties from 'ui/pages/Education/EducationFaculties/EducationFaculties';
import EducationDepartments from 'ui/pages/Education/EducationDepartments/EducationDepartments';
import EducationGroups from 'ui/pages/Education/EducationGroups/EducationGroups';
import EducationStudents from 'ui/pages/Education/EducationStudents/EducationStudents';
import StaffDepartments from 'ui/pages/Staff/StaffDepartments/StaffDepartments';
import StaffEmployees from 'ui/pages/Staff/StaffEmployees/StaffEmployees';
import StaffOrganizations from 'ui/pages/Staff/StaffOrganizations/StaffOrganizations';
import StaffPositions from 'ui/pages/Staff/StaffPositions/StaffPositions';
import { IdentifiersRfid } from 'ui/pages/Identifiers/IdentifiersRfid/IdentifiersRfid';
import { IdentifiersFaceId } from 'ui/pages/Identifiers/IdentifiersFaceId/IdentifiersFaceId';
import { IdentifiersQr } from 'ui/pages/Identifiers/IdentifiersQr/IdentifiersQr';
import { ReportsEvents } from 'ui/pages/Reports/ReportsEvents/ReportsEvents';
import { ReportsWorkingTime } from 'ui/pages/Reports/ReportsWorkingTime/ReportsWorkingTime';
import { ReportsGuestVisits } from 'ui/pages/Reports/ReportsGuestVisits/ReportsGuestVisits';
import { SettingsUsersAndRoles } from 'ui/pages/Settings/SettingsUsersAndRoles/SettingsUsersAndRoles';
import { SettingParameters } from 'ui/pages/Settings/SettingParameters/SettingParameters';
import { SettingsAccessPoints } from 'ui/pages/Settings/SettingsAccessPoints/SettingsAccessPoints';
import { SettingsProductionCalendar } from 'ui/pages/Settings/SettingsProductionCalendar/SettingsProductionCalendar';
import { ImportExport } from 'ui/pages/Settings/ImportExport/ImportExport';
import { SettingsAboutProgram } from 'ui/pages/Settings/SettingsAboutProgram/SettingsAboutProgram';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import { NotFound } from 'ui/pages/404/404';

const Routes = () => {
    const { user } = useSelector((state: State) => state.app, shallowEqual);
    const { identifierTypes } = useSelector((state: State) => state.setupWizard.setupWizardIdentifiers, shallowEqual);

    const [identifiersRfid, setIdentifiersRfid] = useState(false);
    const [identifiersQr, setIdentifiersQr] = useState(false);
    const [identifiersFaceId, setIdentifiersFaceId] = useState(false);

    useEffect(() => {
        if (identifierTypes.length > 0) {
            if (identifierTypes[findIndexFunc(identifierTypes, 0, 'index')].allow) {
                setIdentifiersRfid(true);
            }

            if (identifierTypes[findIndexFunc(identifierTypes, 1, 'index')].allow) {
                setIdentifiersQr(true);
            }

            if (identifierTypes[findIndexFunc(identifierTypes, 2, 'index')].allow) {
                setIdentifiersFaceId(true);
            }
        }
    }, [identifierTypes]);

    return (
        <Router>
            <Switch>
                {/* Login */}
                <Route exact path="/login">
                    <Login />
                </Route>

                {/* Redirect */}
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>

                {!user.isAuthenticated ? (
                    <Redirect to="/login" />
                ) : (
                    <Content>
                        <Switch>
                            {/* Security post */}
                            <Route path="/security-post-central">
                                <SecurityPostCentral />
                            </Route>
                            <Route path="/security-attendance">
                                <SecurityAttendance />
                            </Route>
                            <Route path="/security-post-monitoring">
                                <SecurityPostMonitoring />
                            </Route>

                            {/* Education */}
                            <Route path="/education-institutions">
                                <EducationInstitutions />
                            </Route>
                            <Route path="/education-faculties">
                                <EducationFaculties />
                            </Route>
                            <Route path="/education-departments">
                                <EducationDepartments />
                            </Route>
                            <Route path="/education-groups">
                                <EducationGroups />
                            </Route>
                            <Route path="/education-students">
                                <EducationStudents />
                            </Route>

                            {/* Staff */}
                            <Route path="/staff-organizations">
                                <StaffOrganizations />
                            </Route>
                            <Route path="/staff-departments">
                                <StaffDepartments />
                            </Route>
                            <Route path="/staff-employees">
                                <StaffEmployees />
                            </Route>
                            <Route path="/staff-positions">
                                <StaffPositions />
                            </Route>

                            {/* Identifiers */}
                            {identifierTypes.length > 0 && identifiersRfid && (
                                <Route path="/identifiers-rfid">
                                    <IdentifiersRfid />
                                </Route>
                            )}

                            {identifierTypes.length > 0 && identifiersFaceId && (
                                <Route path="/identifiers-face-id">
                                    <IdentifiersFaceId />
                                </Route>
                            )}

                            {identifierTypes.length > 0 && identifiersQr && (
                                <Route path="/identifiers-qr">
                                    <IdentifiersQr />
                                </Route>
                            )}

                            {/* Zones */}
                            <Route path="/reports-events">
                                <ReportsEvents />
                            </Route>
                            <Route path="/reports-working-time">
                                <ReportsWorkingTime />
                            </Route>
                            <Route path="/reports-guest-visits">
                                <ReportsGuestVisits />
                            </Route>

                            {/* Settings */}
                            <Route path="/settings-users-and-roles">
                                <SettingsUsersAndRoles />
                            </Route>
                            <Route path="/settings-parameters">
                                <SettingParameters />
                            </Route>
                            <Route path="/settings-access-points">
                                <SettingsAccessPoints />
                            </Route>
                            <Route path="/import-export">
                                <ImportExport />
                            </Route>
                            <Route path="/settings-production-calendar">
                                <SettingsProductionCalendar />
                            </Route>
                            <Route path="/settings-about-program">
                                <SettingsAboutProgram />
                            </Route>

                            {/* 404 */}
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </Content>
                )}
            </Switch>
        </Router>
    );
};

export default Routes;
