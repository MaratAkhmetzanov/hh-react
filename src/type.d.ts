import store from './store/store';

type TReducerState = {
    isFetching: boolean;
    ownerLogin: string;
    repository: string;
    blacklist: string[];
    contributor: { avatar: string; login: string };
};

type TContributor = { login: string; avatar_url: string; [key: string]: string };

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
