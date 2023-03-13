import { GithubOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Collapse, Input, Select, Space, Typography } from 'antd';
import CollapsePanel from 'antd/es/collapse/CollapsePanel';
import { ChangeEvent, FC, useEffect } from 'react';
import {
    getContributorsAction,
    setBlacklistAction,
    setOwnerLoginAction,
    setRepositoryAction,
} from '../../store/actions';
import { useDispatch, useSelector } from '../../utils/hooks';

const { Text } = Typography;

const Settings: FC = () => {
    const { ownerLogin, repository, blacklist, isFetching } = useSelector((store) => ({
        ownerLogin: store.ownerLogin,
        repository: store.repository,
        blacklist: store.blacklist,
        isFetching: store.isFetching,
    }));

    const dispatch = useDispatch();

    const ownerLoginChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch(setOwnerLoginAction(value));
        localStorage.setItem('ownerLogin', JSON.stringify(value));
    };

    const repositoryChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch(setRepositoryAction(value));
        localStorage.setItem('repository', JSON.stringify(value));
    };

    const blacklistChangeHandler = (value: string[]) => {
        dispatch(setBlacklistAction(value));
        localStorage.setItem('blacklist', JSON.stringify(value));
    };

    const searchButtonClickHandler = () => {
        dispatch(getContributorsAction({ ownerLogin, repository, blacklist }));
    };

    useEffect(() => {
        const ownerLogin = localStorage.getItem('ownerLogin');
        const repository = localStorage.getItem('repository');
        const blacklist = localStorage.getItem('blacklist');

        if (ownerLogin !== null) {
            dispatch(setOwnerLoginAction(JSON.parse(ownerLogin)));
        }

        if (repository !== null) {
            dispatch(setRepositoryAction(JSON.parse(repository)));
        }
        if (blacklist !== null) {
            dispatch(setBlacklistAction(JSON.parse(blacklist)));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Space direction='vertical' size='middle' style={{ display: 'flex', width: '300px' }}>
            <Collapse defaultActiveKey={['1']}>
                <CollapsePanel header='Параметры поиска' key='1'>
                    <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
                        <Input
                            size='large'
                            placeholder='Владелец репозитория'
                            prefix={<UserOutlined />}
                            value={ownerLogin}
                            onChange={ownerLoginChangeHandler}
                            disabled={isFetching}
                        />
                        <Input
                            size='large'
                            placeholder='Репозиторий'
                            prefix={<GithubOutlined />}
                            value={repository}
                            onChange={repositoryChangeHandler}
                            disabled={isFetching}
                        />
                        <Space direction='vertical' style={{ display: 'flex' }}>
                            <Text strong>Черный список</Text>
                            <Select
                                size='large'
                                mode='tags'
                                allowClear
                                style={{ width: '100%' }}
                                placeholder='Введите логин и нажимите Enter'
                                value={blacklist}
                                onChange={blacklistChangeHandler}
                                open={false}
                                disabled={isFetching}
                            />
                        </Space>
                    </Space>
                </CollapsePanel>
            </Collapse>

            <Button
                size='large'
                type='primary'
                icon={<SearchOutlined />}
                style={{ width: '100%' }}
                onClick={searchButtonClickHandler}
                disabled={isFetching}>
                Найти
            </Button>
        </Space>
    );
};

export default Settings;
