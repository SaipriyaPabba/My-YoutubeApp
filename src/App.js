import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body';
import Header from './components/Header';
import AppStore from './utils/AppStore';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
function App() {
  // const appRouter=createBrowserRouter({
  //   path:"/",
  //   element:"<Body/>",
  //   children:[{
  //     path:"/",
  //     element:"<MainContainer/>"},
  //   {
  //     path:"/watch",
  //     element:"<WatchPage/>"
  //   } ]
  // })
  return (
    <Provider store={AppStore}>
    <div className="App">
      <Header/>
      <Body/>
    </div>
    </Provider>

  );
}

export default App;
