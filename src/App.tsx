import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ChangeCurrencyList from './components/ChangeCurrencyList'
import CurrencyItemList from './components/CurrencyItemList'
import { getDefaultCurrency } from './helpers/GetDataCurency'
import { setDefaultCurrency } from './store/Reducer'
import PageNotFound from './components/PageNotFound'

function App(props: any) {
  useEffect(() => {
    getDefaultCurrency().then(res => {
      props.store.dispatch(setDefaultCurrency(res.data))
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<ChangeCurrencyList state={props.store.getState()} />} />
          <Route path="/currency" element={<CurrencyItemList state={props.store.getState()} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App