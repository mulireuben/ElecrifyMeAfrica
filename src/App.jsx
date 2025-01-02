import { Layout } from 'antd';
import './App.css';
import Appfooter from './components/Common/Appfooter';
import Appheader from './components/Common/Appheader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
// import Forbusinesses from './components/Pages/Forbusinesses';
// import Evchargers from './components/Pages/Evchargers';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      {' '}
      {/* Router should wrap everything, including Layout */}
      <div className='App'>
        <Layout>
          <Header>
            <Appheader />
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
            </Routes>
          </Content>
          <Footer>
            <Appfooter />
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
