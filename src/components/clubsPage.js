import React, { Fragment, useState } from 'react';
import './clubsPage';
import Header from './Header';
import Sidebar from './Sidebar';
import ClubFeed from './clubFeed';

function ClubsPage()
{
    const [clubName, setClubName] = useState('');

    const getName = (name) => {
        setClubName(name);
    }

    return(
        <Fragment>
            <Header/>
            <Sidebar changeName={getName}/>
            <ClubFeed clubName={clubName}/>
        </Fragment>
    );
}

export default ClubsPage;