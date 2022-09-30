export interface dataCurrency {
   "r030": number,
   "txt": string,
   "rate": number,
   "cc": string,
   "exchangedate": string
}

export interface StateAction {
   type: string,
   payload: dataCurrency
}