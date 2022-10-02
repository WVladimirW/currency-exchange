import CurrencyItem from './CurrencyItem'
import BasicCurrency from './BasicCurrency'
import { dataState, dataCurrency } from '../helpers/types'
import CurrencyHeader from './CurrencyHeader'

function CurrencyItemList(props: { state: dataState }) {
   return (
      <div className='main'>
         <BasicCurrency state={props.state.data} />
         <CurrencyHeader />
         {props.state.data.map((item: dataCurrency) => <CurrencyItem key={item.r030} data={item} />)}
      </div>
   )
}

export default CurrencyItemList