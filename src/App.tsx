import Layout from './components/layout/layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Skills from './pages/skills';
import About from './pages/about';
import Blog from './pages/blog';
import Works from './pages/works';


function App() {
  return (
   <BrowserRouter>
    <Layout>
     <Routes>
       <Route path='/About' element={<About/>} />
       <Route path='/Works' element={<Works/>}/>
       <Route path='/Skills' element={<Skills/>} />
       <Route path='/Blog' element={<Blog/>}/>
       <Route path='/Contact' element={<Contact/>} />
       <Route path='/' element={<Home/>}></Route>
     </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
