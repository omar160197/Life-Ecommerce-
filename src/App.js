import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar/Navbar';
import themeDark from './theme/DarkTheme/DarkTheme';
import themeLight from './theme/LightTheme/LightTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact.jsx';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import Deatails2 from './pages/details/details';
import SeeAllOffers from './pages/offers/offers';
import Product from './pages/product/product';
import ProductDetails from './pages/details/productDetails';
import Favourite from './pages/favourite/favourite';
import Tools from './components/category/tools/tools';
import Units from './components/category/units/units';
import Medicines from './components/category/medicines/medicines';
import News from './pages/News/News.jsx';
import Other from './components/category/other/other';
import SearchResult from './pages/SearchResult/searchResult';
import Receipts from './pages/receipts/receipt'
import Profile from './pages/profile/profile';


const App = () => {
  const [light, setLight] = React.useState(true);
  return (
    <>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
        {/* <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contactus' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/details/:id' element={<Deatails2/>} />
            <Route path='/offers' element={<SeeAllOffers/>} />
            <Route path='/products' element={<Product />} />
            <Route path='/searchResult' element={<SearchResult/>}/>
            <Route path='/tools' element={<Tools />} />
            <Route path='/units' element={<Units />} />
            <Route path='/medicines' element={<Medicines />} />
            <Route path='/news' element={<News />} />
            <Route path='/others' element={<Other/>} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/favourite' element={<Favourite />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/receipts' element={<Receipts/>}/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
