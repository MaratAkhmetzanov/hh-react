import { AnyAction } from 'redux';
import { TReducerState } from '../type';
import { SET_BLACKLIST, SET_CONTRIBUTOR, SET_ISFETCHING, SET_OWNER_LOGIN, SET_REPOSITORY } from './actions';

const initialState: TReducerState = {
    ownerLogin: '',
    repository: '',
    blacklist: [],
    contributor: { avatar: '', login: '' },
    isFetching: false,
};

export const rootReducer = (state: TReducerState = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_OWNER_LOGIN:
            return {
                ...state,
                ownerLogin: action.payload,
            };
        case SET_REPOSITORY:
            return {
                ...state,
                repository: action.payload,
            };
        case SET_BLACKLIST:
            return {
                ...state,
                blacklist: [...action.payload],
            };
        case SET_CONTRIBUTOR:
            return {
                ...state,
                contributor: { avatar: action.payload.avatar, login: action.payload.login },
            };
        case SET_ISFETCHING:
            return {
                ...state,
                isFetching: action.payload,
            };
        default:
            return state;
    }
};
