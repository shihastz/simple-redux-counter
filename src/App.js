import './App.css';
import {createStore} from 'redux';
import allReducer from './reducers'; //not need /index
import { Provider } from 'react-redux'
import Counter from './Counter';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //tool to visualize redux store(redux devtools chrome extension)
)

function App() {
 
  return (
      <div className="App">
        <Provider store={store}>
            <Counter/>
        </Provider>   
      </div> 
  );
}

export default App;
