import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ChangeCurrency from './components/ChangeCurrency'
import PageNotFound from './components/PageNotFound'
import CurrencyItemList from './components/CurrencyItemList'
import { data } from './store/data'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<ChangeCurrency />} />
          <Route path="/currency" element={<CurrencyItemList data={data} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App