import logo from './logo.svg';

import BaiTap1 from './components/BaiTap1';
import BaiTap2 from './components/BaiTap2';
import BaiTap3 from './components/BaiTap3';
function App() {
  return (
    <div className="App">
         {/* <p>Bài Tập 1</p>  */}
        <BaiTap1 />
       
        {/* <p>Bài Tập 2</p> */}
        <BaiTap2></BaiTap2>
        <BaiTap3 />
       

    </div>
  );
}

export default App;
