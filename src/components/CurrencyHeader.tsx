function CurrencyHeader() {
   return (
      <div className="item-container hide-border">
         <div className="currency-name">
            {<h6><strong>Назва валюти</strong></h6>}
         </div>
         <div className="currency-rate">
            {<h6><strong>Курс</strong></h6>}
         </div>
         <div className="currency-date">
            {<h6><strong>Дата</strong></h6>}
         </div>
      </div>
   )
}

export default CurrencyHeader