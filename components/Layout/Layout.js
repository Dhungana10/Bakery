import React, { Fragment } from 'react';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
            <header>
                <MainNavigation/>
            </header>
            <main>
                {props.children} 
        {/* to insert everything into main from the layout in App.js */}
            </main>
    </Fragment>  

  );
};

export default Layout;
