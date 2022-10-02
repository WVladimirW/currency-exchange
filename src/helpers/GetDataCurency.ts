import axios from 'axios'

export const getDefaultCurrency = () => {
   return axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
}