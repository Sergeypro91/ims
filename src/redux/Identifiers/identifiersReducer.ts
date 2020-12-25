import { combineReducers } from 'redux';
import IdentifiersFaceIdReducer from 'redux/Identifiers/IdentifiersFaceId/identifiersFaceIdReducer';
import IdentifiersQrReducer from 'redux/Identifiers/IdentifiersQr/identifiersQrReducer';
import IdentifiersRfidReducer from 'redux/Identifiers/IdentifiersRfid/identifiersRfidReducer';

const SecurityPost = combineReducers({
    identifiersFaceId: IdentifiersFaceIdReducer,
    identifiersQr: IdentifiersQrReducer,
    identifiersRfid: IdentifiersRfidReducer
});

export default SecurityPost;
