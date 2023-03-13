import Title from 'antd/es/typography/Title';
import React, { FC } from 'react';
import SearchResult from '../components/search-result/search-result';
import Settings from '../components/settings/settings';
import styles from './app.module.css';

const App: FC = () => {
    return (
        <div className={styles.app}>
            <Title>Поиск ревьюера</Title>
            <div className={styles.main}>
                <Settings />
                <SearchResult />
            </div>
        </div>
    );
};

export default App;
