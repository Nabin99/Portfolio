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
       <Route path='/about' element={<About/>} />
       <Route path='/works' element={<Works/>}/>
       <Route path='/skills' element={<Skills/>} />
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/contact' element={<Contact/>} />
       <Route path='/' element={<Home/>}></Route>
     </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
