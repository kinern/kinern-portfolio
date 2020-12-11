import React from 'react';
import Icon from '@mdi/react'
import { mdiArrowUpBold } from '@mdi/js';

const ReturnTopBtn = () => {
    return (
        <a href="#top" className="return-top-a">
        <div className="return-top">
            <Icon 
                path={mdiArrowUpBold}
                size={1.5}
            />
        </div>
        </a>  
    );
};

export default ReturnTopBtn;