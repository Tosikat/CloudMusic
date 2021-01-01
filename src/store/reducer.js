import { combineReducers } from "redux-immutable";
// 使combineReducers 拥有 immutable的属性
import recommendReducer from '../views/discover/children/recommend/store'
import albumReducer from '../views/discover/children/album/store'
import playlistReducer from '../views/discover/children/songs/store'
import authReducer from '../views/login/store'
const cReducer = combineReducers({
  recommend: recommendReducer,
  album: albumReducer,
  playlist: playlistReducer,
  auth: authReducer
});

export default cReducer;
