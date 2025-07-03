import './App.css';
import Navbar from './components/Navbar';
import ProductsPage from './components/ProductsPage';
import './index.css';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
<div className="App">
      <Navbar />
        <ProductsPage />
      <Toaster position='bottom-right'></Toaster>
    </div>
  );
}

export default App;
