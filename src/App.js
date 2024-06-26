// import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import Store from './Redux_Container/Store';
import BookContainer from './Redux_Container/BookContainer';
function App() {
  return (
   <Provider store={Store}>
    <div className="App">
      <BookContainer/>
    </div>
    </Provider>
  );
}

export default App;
