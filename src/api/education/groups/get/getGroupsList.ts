import axios from 'axios';
import store from 'redux/store';
import { APIGetListParams, APIListResponse } from '../../../api.types';
import { GroupsList } from '../groups.types';
import { isResponseSuccessful } from '../../../api.utils';

const getGroupsList = async (params: APIGetListParams): Promise<GroupsList | null> => {
    let groupsList = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/teachgroups`, { params })
        .then((response: APIListResponse<GroupsList>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) groupsList = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return groupsList;
};

export default getGroupsList;
