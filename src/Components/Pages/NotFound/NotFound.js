import { Container } from '@mui/material';
import React from 'react';
import './NotFound.scss';

const NotFound = () => {
    return (
        <Container>
            <div className="not-found">
                <h1>
                    Page Not Found
                </h1>
                <h1>
                    404
                </h1>
            </div>
        </Container>
    );
};

export default NotFound;