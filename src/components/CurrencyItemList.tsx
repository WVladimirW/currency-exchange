import CurrencyItem from './CurrencyItem'
import BasicCurrency from './BasicCurrency'
import { dataCurrency } from '../helpers/types'
import CurrencyHeader from './CurrencyHeader'

function CurrencyItemList(props: { data: dataCurrency[] }) {
   return (
      <div className='main'>
         <BasicCurrency />
         <CurrencyHeader />
         {props.data.map((item: dataCurrency) => <CurrencyItem key={item.r030} data={item} />)}
      </div>
   )
}

export default CurrencyItemList