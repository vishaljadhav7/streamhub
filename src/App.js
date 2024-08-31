
import './App.css';
import Body from './Components/Body';
import appStore from './Utils/appStore'
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3
  };
  
  return (
   <Provider store={appStore} >
     <Body/>
   </Provider>
    

  );
}

export default App;
