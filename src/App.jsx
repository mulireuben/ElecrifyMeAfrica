// import { Layout } from 'antd';
import './App.css';
// import Appfooter from './components/Common/Appfooter';
import Appheader from './components/Common/Appheader';
// import Home from './components/Pages/Home';
// import { Route, Router, Routes } from 'react-router-dom';
// import Appheader from './components/Common/Appheader';
// import Home from './components/Pages/Home';
// import Appfooter from './components/Common/Appfooter';

// const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      <Appheader />
      {/* <Home />
      <Appfooter /> */}
      {/* <Layout>
        <Router>
          <Header>
            <Appheader />
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={Home} />
            </Routes>
          </Content>
        </Router>
        <Footer>
          <Appfooter />
        </Footer>
      </Layout> */}
    </div>
  );
}

export default App;
