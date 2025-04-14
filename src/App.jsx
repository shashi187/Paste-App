import './App.css'
import { createBrowserRouter,} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import { RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <NavBar />
        <Home />
      </div>
    },
    {
      path:"paste",
      element:
      <div>
        <NavBar />
        <Paste />
      </div>
    },
    {
      path:"paste/:id",
      element:
      <div>
        <NavBar />
        <ViewPaste />
      </div>
    }
  ]
)
function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
