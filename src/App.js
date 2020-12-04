import purebem from 'purebem';
import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import Aside from './components/Aside';
import Info from './components/Info';


function App() {
  const block = purebem("app");

  return (
    <div className={ block() }>
      <div className={ block("aside-content") }>
        <Aside />
      </div>
      <div className={ block("main-content")}>
        <div className={ block("header-content") }>
          <Header title="JESSICA SCHWABEGGER" />
        </div>
        <div className={ block("info-content") }>
          <Info />
        </div>
      </div>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
