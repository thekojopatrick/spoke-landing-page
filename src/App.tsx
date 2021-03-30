import React from 'react';
import './styles/App.css';
import Layout from './components/Layout/Layout';
import { Header } from './sections/Header/Header';
import Footer from './sections/Footer/Footer';
import BookDemo from './sections/BookDemo/BookDemo';
import Security from './sections/Security/Security';
import TryDemo from './sections/Demo/TryDemo';
import DiscoverWhy from './sections/Discover/Discover';

function App() {
  return (
    <div className="App">
    <Layout>
      <Header/>
      <TryDemo/>
      <DiscoverWhy/>
      <Security/>
      <BookDemo/>
      <Footer/>
    </Layout>
    </div>
  );
}

export default App;
