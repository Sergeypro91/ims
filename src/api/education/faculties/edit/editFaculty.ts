import axios from 'axios';
import store from 'redux/store';
import { ActionStatus, APIResponse } from '../../../api.types';
import { isResponseSuccessful } from '../../../api.utils';
import { EditFacultyParams } from '../faculties.types';

const editFaculty = async (params: EditFacultyParams): Promise<ActionStatus> => {
    let successful = false;
    let rowUuid = '';

    await axios
        .put(`${store.getState().app.config.apiUrl}/core/faculties/${params.departmentUuid}`, params)
        .then((response: APIResponse) => {
            if (isResponseSuccessful(response)) {
                successful = true;
                rowUuid = response.data.payload.result;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return { successful, rowUuid };
};

export default editFaculty;
