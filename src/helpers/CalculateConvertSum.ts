export const calculateConvertSum = (input: number, cur1: number, cur2: number) => {
   if (input === 0 || cur1 === cur2) return 0
   if (cur1 === 0) {
      return (input / cur2).toFixed(2)
   } else if (cur2 === 0) {
      return (input * cur1).toFixed(2)
   } else {
      return ((cur1 / cur2) * input).toFixed(2)
   }
}