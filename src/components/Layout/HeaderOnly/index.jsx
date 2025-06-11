import Header from '../components/Header';

import React from 'react';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="contaier">
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
