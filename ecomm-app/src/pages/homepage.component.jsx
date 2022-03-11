import React from 'react';

import Directory from '../components/directory/directory.component';

import './homepage.styles.scss';
console.log(process.env)
console.log('.env.sample')
export default () => (
    <div className="homepage">
        <Directory />
    </div>
)