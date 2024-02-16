import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContent from "./components/MainContent";
import { Provider } from "react-redux";
import appStore from "./reduxFiles/appStore";
import Watch from "./components/Watch";

const appRoutes = createBrowserRouter([{
  path:'/',element:<Body/>,
  children:[{
    path:'/',element: <MainContent/>
  },{
    path:'watch',
    element:<Watch/>
  }]
}])

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      
      <Header/>
      <RouterProvider router={appRoutes}/>
    </div>
    </Provider>
  );
}

export default App;
