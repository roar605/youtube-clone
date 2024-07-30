// import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"watch",
          element:<WatchPage/>
        }
      ]
    }
  ])

  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>

  );
}

export default App;
