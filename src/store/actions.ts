export const SET_OWNER_LOGIN = 'SET_OWNER_LOGIN';
export const SET_REPOSITORY = 'SET_REPOSITORY';
export const SET_BLACKLIST = 'SET_BLACKLIST';
export const GET_CONTRIBUTOR = 'GET_CONTRIBUTOR';
export const SET_CONTRIBUTOR = 'SET_CONTRIBUTOR';
export const SET_ISFETCHING = 'SET_ISFETCHING';

export const setOwnerLoginAction = (payload: string) => ({
    type: SET_OWNER_LOGIN,
    payload: payload,
});

export const setRepositoryAction = (payload: string) => ({
    type: SET_REPOSITORY,
    payload: payload,
});

export const setBlacklistAction = (payload: string[]) => ({
    type: SET_BLACKLIST,
    payload: payload,
});

export const getContributorsAction = (payload: { ownerLogin: string; repository: string; blacklist: string[] }) => ({
    type: GET_CONTRIBUTOR,
    payload: payload,
});

export const setContributorAction = (payload: { avatar: string; login: string }) => ({
    type: SET_CONTRIBUTOR,
    payload: payload,
});

export const setIsFetchingAction = (payload: boolean) => ({
    type: SET_ISFETCHING,
    payload: payload,
});
