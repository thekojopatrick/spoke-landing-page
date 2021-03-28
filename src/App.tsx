import React from 'react';
import './styles/App.css';
import Layout from './components/Layout/Layout';
import { Header } from './sections/Header/Header';

function App() {
  return (
    <div className="App">
    <Layout>
      <Header/>
    </Layout>
    </div>
  );
}

export default App;
