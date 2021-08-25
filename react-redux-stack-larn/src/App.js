import { Component } from "react";
import { createStore } from "redux";
import store from "./store";
import { Provider } from "react-redux";
import Count from "./components/Count";
import Control from "./components/Control";


class App extends Component {
  render() {
    //   const reducer = (state = {}, action) => {
    //   if(action.type === 'A') {
    //     return {
    //       ...state,
    //       A: 'I am A'
    //     }
    //   }
    //   if(action.type === 'B') {
    //     return {
    //       ...state,
    //       B: 'I am B'
    //     }
    //   }
    // }
    // const store = createStore(reducer)

    // store.subscribe(() => {
    //   console.log(store.getState().A);
    // })

    // store.subscribe(() => {
    //   console.log(store.getState().B);
    // })

    // store.dispatch({type: 'B'})
    // store.dispatch({type: 'something'})
    // store.dispatch({type: 'A'})
    // store.dispatch({type: 'something'})

    return (
      <Provider store={store}>
        <h3>Hello redux!</h3>
        <Count />
        <Control />
      </Provider>
    );
  }
}

export default App;
