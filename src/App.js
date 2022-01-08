import "./App.css";
// eslint-disable-next-line no-unused-vars
import CContents from './components/CContents';
import { CFooter } from './components/CFooter'
import CHeader from './components/CHeader'
import COuter from "./components/COuter";

function App() {
  return (
    <div className="App">
      <CHeader aName="Karolina" aFamily="Płoszaj" />
      {/*<CHeader aName="Tomasz" aFamily="Nowak"/>*/}
     {/* <CContents />*/}
     <COuter/>
      <CFooter weather="słoneczna" temp="25">
        <p>Niebo jest bezchumrne, wiatr słaby.</p>
      </CFooter>
      {/*} <CFooter weather="deszczowa" temp="13" />
      <CFooter weather="śnieżna" temp="-6" />*/}
    </div>
  );
}

export default App;
