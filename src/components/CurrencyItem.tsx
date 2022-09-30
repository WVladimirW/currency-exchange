import { dataCurrency } from '../helpers/types'

function CurrencyItem(props: { data: dataCurrency }) {
   return (
      <div className="item-container">
         <div className="currency-name">
            {props.data.txt}
         </div>
         <div className="currency-rate">
            {props.data.rate}
         </div>
         <div className="currency-date">
            {props.data.exchangedate}
         </div>
      </div>
   )
}

export default CurrencyItem