
import { dataCurrency } from "../helpers/types"
import ChangeCurrencyOption from "./ChangeCurrencyOption"

function BasicCurrency(props: { state: dataCurrency[] }) {
   return (
      <div className="input-field col s12">
         <select className="browser-default">
            <option value="UAH">- Гривня</option>
            <option value="Uaa">- qefdvcdня</option>
            <ChangeCurrencyOption data={props.state} />
         </select>
      </div >
   )
}

export default BasicCurrency