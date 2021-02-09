import { combineReducers } from 'redux';
import IdentifiersFaceIdReducer from 'redux/Identifiers/IdentifiersFaceId/identifiersFaceIdReducer';
import IdentifiersQrReducer from 'redux/Identifiers/IdentifiersQr/identifiersQrReducer';
import IdentifiersRfidReducer from 'redux/Identifiers/IdentifiersRfid/identifiersRfidReducer';
import IdentifiersGeneralReducer from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralReduce';

const Identifiers = combineReducers({
    identifiersFaceId: IdentifiersFaceIdReducer,
    identifiersQr: IdentifiersQrReducer,
    identifiersRfid: IdentifiersRfidReducer,
    identifiersGeneral: IdentifiersGeneralReducer
});

export default Identifiers;
