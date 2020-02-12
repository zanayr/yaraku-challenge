import React from 'react';


import Action from '../button/Action/Action';
import List from '../list/List/List';

const main = (props) => {
  return (
      <main>
          <div className="wrapper">
            <List data={{0: {id: 0, title: 'Hello, World! Fizz Buzz', author: 'Spam Foobar'}}} />
            <Action />
          </div>
      </main>
  );
}

export default main;