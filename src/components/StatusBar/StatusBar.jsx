import React from 'react';
import {createUseStyles} from 'react-jss'

const styles = createUseStyles({
    content: {
        height: 70,
        backgroundColor: '#555555',
        overflow: 'hidden',
        padding: '0 40px'
    }
});

const StatusBar = ({children}) => {
    const classes = styles();

    return (<section className={classes.content}>
        {children}
    </section>);
};

export default StatusBar;
