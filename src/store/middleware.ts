import { Middleware, MiddlewareAPI } from 'redux';
import fetchContributors from '../api/api';
import { AppDispatch, RootState, TContributor } from '../type';
import { GET_CONTRIBUTOR, setContributorAction, setIsFetchingAction } from './actions';

export const searchMiddleware: Middleware =
    (store: MiddlewareAPI<AppDispatch, RootState>) =>
    (next: AppDispatch) =>
    (action: { type: string; payload: { ownerLogin: string; repository: string; blacklist: string[] } }) => {
        const { dispatch } = store;
        const { type, payload } = action;

        if (type === GET_CONTRIBUTOR) {
            dispatch(setIsFetchingAction(true));

            fetchContributors(payload.ownerLogin, payload.repository)
                .then((res: Array<TContributor>) => {
                    const contributors: Array<TContributor> = res.filter(
                        (item: TContributor) =>
                            !payload.blacklist.includes(item.login) && item.login !== payload.ownerLogin,
                    );
                    if (contributors.length) {
                        const randomReviewer = contributors[Math.floor(Math.random() * contributors.length)];
                        dispatch(
                            setContributorAction({ avatar: randomReviewer.avatar_url, login: randomReviewer.login }),
                        );
                    } else {
                        dispatch(setContributorAction({ avatar: '', login: '' }));
                    }
                    dispatch(setIsFetchingAction(false));
                })
                .catch((error: Error) => {
                    console.log(error);
                    dispatch(setContributorAction({ avatar: '', login: '' }));
                    dispatch(setIsFetchingAction(false));
                });
        }
        next(action);
    };
