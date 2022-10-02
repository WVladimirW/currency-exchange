import { dataCurrency, dataState } from "./types"

export const calculateCarrency = (cur: dataCurrency, state: dataCurrency[]) => {
   const newArrCurrency: dataCurrency[] = [{
      "r030": 980,
      "txt": "Українська гривня",
      "rate": +(1 / cur.rate).toFixed(2),
      "cc": "UAH",
      "exchangedate": cur.exchangedate
   }]

   state.map(item => {
      if (item.cc !== cur.cc) {
         newArrCurrency.push({ ...item, rate: +(cur.rate / item.rate).toFixed(2) })
      }
   })
   return newArrCurrency
}