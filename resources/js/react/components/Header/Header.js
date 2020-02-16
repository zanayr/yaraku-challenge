import React from 'react';

import logo from '../../svg/logo.svg';
import Search from '../input/Search/Search';
import Sort from '../button/Sort/Sort';

const header = (props) => {
  return (
    <header className={'bg-gradient'}>
      <div className='wrapper'>
          <div className='header row center-content justify-between bg-black'>
              <div className='wrapper'>
                <div className='logo'>
                  <div className='wrapper'>
                    <img src={logo} />
                  </div>
                </div>
                <Search />
                <div className='toolbar row center-content'>
                  <div className='wrapper'>
                    <Sort value='author' />
                    <Sort value='title' />
                  </div>
                </div>
              </div>
          </div>
      </div>
    </header>
  );
};

export default header;