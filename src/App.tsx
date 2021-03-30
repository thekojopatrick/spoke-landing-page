import React from 'react';
import './styles/App.css';
import Layout from './components/Layout/Layout';
import { Header } from './sections/Header/Header';
import Footer from './sections/Footer/Footer';
import BookDemo from './sections/BookDemo/BookDemo';
import Security from './sections/Security/Security';

function App() {
  return (
    <div className="App">
    <Layout>
      <Header/>
      <Security/>
      <BookDemo/>
      <Footer/>
    </Layout>
    </div>
  );
}

export default App;
