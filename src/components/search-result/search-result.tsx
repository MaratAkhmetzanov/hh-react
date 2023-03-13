import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import { FC } from 'react';
import { useSelector } from '../../utils/hooks';
import styles from './search-result.module.css';

const SearchResult: FC = () => {
    const contributor = useSelector((store) => store.contributor);

    return (
        <div className={styles.wrapper}>
            <Space direction='vertical' size={4} align='center'>
                <Avatar src={contributor.avatar} size={100} icon={<UserOutlined />} />
                <Title level={4}>{contributor.login ? contributor.login : ''}</Title>
            </Space>
        </div>
    );
};

export default SearchResult;
