import React, { useState, useEffect } from 'react'
import { calculateConvertSum } from '../helpers/CalculateConvertSum'
import { dataCurrency, dataState } from '../helpers/types'
import ChangeCurrencyOption from './ChangeCurrencyOption'

function ChangeCurrencyList(props: { state: dataState }) {
   const [input, setInput] = useState(0)
   const [cur1, setCur1] = useState(0)
   const [cur2, setCur2] = useState(0)
   const [output, setOutput] = useState('0')

   const changeCurrencySum = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(+e.target.value)
   }
   const changeFromCurency = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newCur: dataCurrency | undefined = props.state.data.find((item: any) => item.cc === e.target.value)
      const rate = newCur === undefined ? 0 : newCur.rate
      setCur1(rate)
   }
   const changeToCurency = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newCur: dataCurrency | undefined = props.state.data.find((item: any) => item.cc === e.target.value)
      const rate = newCur === undefined ? 0 : newCur.rate
      setCur2(rate)
   }

   useEffect(() => {
      const output = String(calculateConvertSum(input, cur1, cur2))
      setOutput(output)
   }, [input, cur1, cur2])

   return (
      <div className='main'>
         <div className="change-container">
            <div>
               <input onChange={(e) => changeCurrencySum(e)} type="text" placeholder="Введіть сумму валюти" />
            </div>
            <div className="input-field input40 col s12">
               <select onChange={(e) => changeFromCurency(e)} className="browser-default">
                  <option value="UAH">- Гривня</option>
                  <ChangeCurrencyOption data={props.state.data} />
               </select>
            </div>
            <div className="input-field input40 col s12">
               <select onChange={(e) => changeToCurency(e)} className="browser-default">
                  <option value="UAH">- Гривня</option>
                  <ChangeCurrencyOption data={props.state.data} />
               </select>
            </div>
            <div className="wrapper">
               <p>Сума до отримання:</p>
               <p>{output}</p>
            </div>
         </div>
      </div >
   )
}

export default ChangeCurrencyList