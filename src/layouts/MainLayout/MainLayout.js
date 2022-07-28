import React from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const MainLayout = (props) => {
    return (
        <div>
            <Header />
            {/* <Outlet /> */}
        </div>
    );
};

MainLayout.propTypes = {};

export default MainLayout;
