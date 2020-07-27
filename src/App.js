import React from 'react';
import List from './List';
import './App.css';

 class App extends React.Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render(){  
    let {store} = this.props;
    let list = store.lists.map(list => (
    <List key={list.id} header={list.header} cards={list.cardIds.map(id => store.allCards[id])}/>));

    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {list}
        </div>
      </main>
    );
  }
}

export default App;
