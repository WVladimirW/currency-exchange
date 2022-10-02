import { dataCurrency, dataState } from "../helpers/types"

function ChangeCurrencyOption(props: dataState) {
   return (
      <>
         {props.data.map((item: dataCurrency) => <option key={item.r030} value={item.cc}>- {item.txt}</option>)}
      </>
   )
}

export default ChangeCurrencyOption