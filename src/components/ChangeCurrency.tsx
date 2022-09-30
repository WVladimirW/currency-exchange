function ChangeCurrency(props: any) {
   return (
      <div className='main'>
         <div className="change-container">
            <div>
               <input type="text" placeholder="Введіть сумму для купівлі" />
            </div>
            <div className="input-field input40 col s12">
               <select className="browser-default">
                  <option value="UAH">- Гривня</option>
                  <option value="USD">- Доллар США</option>
                  <option value="EUR">- Евро</option>
               </select>
            </div>
            <div className="input-field input40 col s12">
               <select className="browser-default">
                  <option value="USD">- Доллар США</option>
                  <option value="UAH">- Гривня</option>
                  <option value="EUR">- Евро</option>
               </select>
            </div>
            <div className="wrapper">
               <p>Сума до отримання:</p>
               <p>15000</p>
            </div>
         </div>
      </div >
   )
}

export default ChangeCurrency