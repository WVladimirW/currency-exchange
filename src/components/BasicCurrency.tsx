function BasicCurrency() {
   return (
      <div className="input-field col s12">
         <select className="browser-default">
            <option value="">Оберіть базову валюту</option>
            <option value="UAH">- Гривня</option>
            <option value="USD">- Доллар США</option>
            <option value="EUR">- Евро</option>
         </select>
      </div>
   )
}

export default BasicCurrency