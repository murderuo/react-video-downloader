import './App.css';
import Footer from './pages/Footer';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import { VideoContextProvider } from './pages/Context/globalContext';

function App() {
  return (
    <>
      <VideoContextProvider>
        <Header />
        <Main />
        <Footer />
      </VideoContextProvider>
    </>
  );
}

export default App;
