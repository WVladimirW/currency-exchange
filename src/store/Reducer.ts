import { dataCurrency, StateAction } from '../helpers/types'

export let initialState: dataCurrency[] = [
   {
      "r030": 36,
      "txt": "Австралійський долар",
      "rate": 23.6343,
      "cc": "AUD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 124,
      "txt": "Канадський долар",
      "rate": 26.6157,
      "cc": "CAD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 156,
      "txt": "Юань Женьміньбі",
      "rate": 5.1388,
      "cc": "CNY",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 191,
      "txt": "Куна",
      "rate": 4.7351,
      "cc": "HRK",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 203,
      "txt": "Чеська крона",
      "rate": 1.4517,
      "cc": "CZK",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 208,
      "txt": "Данська крона",
      "rate": 4.7921,
      "cc": "DKK",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 344,
      "txt": "Гонконгівський долар",
      "rate": 4.6584,
      "cc": "HKD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 348,
      "txt": "Форинт",
      "rate": 0.084431,
      "cc": "HUF",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 356,
      "txt": "Індійська рупія",
      "rate": 0.44945,
      "cc": "INR",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 360,
      "txt": "Рупія",
      "rate": 0.0024014,
      "cc": "IDR",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 376,
      "txt": "Новий ізраїльський шекель",
      "rate": 10.2488,
      "cc": "ILS",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 392,
      "txt": "Єна",
      "rate": 0.25285,
      "cc": "JPY",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 398,
      "txt": "Теньге",
      "rate": 0.07676,
      "cc": "KZT",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 410,
      "txt": "Вона",
      "rate": 0.025539,
      "cc": "KRW",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 484,
      "txt": "Мексиканське песо",
      "rate": 1.8143,
      "cc": "MXN",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 498,
      "txt": "Молдовський лей",
      "rate": 1.8703,
      "cc": "MDL",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 554,
      "txt": "Новозеландський долар",
      "rate": 20.76,
      "cc": "NZD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 578,
      "txt": "Норвезька крона",
      "rate": 3.3783,
      "cc": "NOK",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 643,
      "txt": "Російський рубль",
      "rate": 0.6141,
      "cc": "RUB",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 702,
      "txt": "Сінгапурський долар",
      "rate": 25.4603,
      "cc": "SGD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 710,
      "txt": "Ренд",
      "rate": 2.033,
      "cc": "ZAR",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 752,
      "txt": "Шведська крона",
      "rate": 3.2697,
      "cc": "SEK",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 756,
      "txt": "Швейцарський франк",
      "rate": 37.2731,
      "cc": "CHF",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 818,
      "txt": "Єгипетський фунт",
      "rate": 1.8717,
      "cc": "EGP",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 826,
      "txt": "Фунт стерлінгів",
      "rate": 40.3461,
      "cc": "GBP",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 840,
      "txt": "Долар США",
      "rate": 36.5686,
      "cc": "USD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 933,
      "txt": "Білоруський рубль",
      "rate": 13.2919,
      "cc": "BYN",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 944,
      "txt": "Азербайджанський манат",
      "rate": 21.5528,
      "cc": "AZN",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 946,
      "txt": "Румунський лей",
      "rate": 7.2001,
      "cc": "RON",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 949,
      "txt": "Турецька ліра",
      "rate": 1.971,
      "cc": "TRY",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 960,
      "txt": "СПЗ (спеціальні права запозичення)",
      "rate": 46.7751,
      "cc": "XDR",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 975,
      "txt": "Болгарський лев",
      "rate": 18.2214,
      "cc": "BGN",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 978,
      "txt": "Євро",
      "rate": 35.6361,
      "cc": "EUR",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 985,
      "txt": "Злотий",
      "rate": 7.3483,
      "cc": "PLN",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 12,
      "txt": "Алжирський динар",
      "rate": 0.25917,
      "cc": "DZD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 50,
      "txt": "Така",
      "rate": 0.36232,
      "cc": "BDT",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 51,
      "txt": "Вірменський драм",
      "rate": 0.090148,
      "cc": "AMD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 214,
      "txt": "Домініканське песо",
      "rate": 0.68504,
      "cc": "DOP",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 364,
      "txt": "Іранський ріал",
      "rate": 0.00087068,
      "cc": "IRR",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 368,
      "txt": "Іракський динар",
      "rate": 0.025047,
      "cc": "IQD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 417,
      "txt": "Сом",
      "rate": 0.4561,
      "cc": "KGS",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 422,
      "txt": "Ліванський фунт",
      "rate": 0.024258,
      "cc": "LBP",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 434,
      "txt": "Лівійський динар",
      "rate": 7.2354,
      "cc": "LYD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 458,
      "txt": "Малайзійський ринггіт",
      "rate": 7.8854,
      "cc": "MYR",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 504,
      "txt": "Марокканський дирхам",
      "rate": 3.3231,
      "cc": "MAD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 586,
      "txt": "Пакистанська рупія",
      "rate": 0.15951,
      "cc": "PKR",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 682,
      "txt": "Саудівський ріял",
      "rate": 9.7324,
      "cc": "SAR",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 704,
      "txt": "Донг",
      "rate": 0.0015321,
      "cc": "VND",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 764,
      "txt": "Бат",
      "rate": 0.96722,
      "cc": "THB",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 784,
      "txt": "Дирхам ОАЕ",
      "rate": 9.9558,
      "cc": "AED",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 788,
      "txt": "Туніський динар",
      "rate": 11.1619,
      "cc": "TND",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 860,
      "txt": "Узбецький сум",
      "rate": 0.0033202,
      "cc": "UZS",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 901,
      "txt": "Новий тайванський долар",
      "rate": 1.15184,
      "cc": "TWD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 934,
      "txt": "Туркменський новий манат",
      "rate": 10.4482,
      "cc": "TMT",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 941,
      "txt": "Сербський динар",
      "rate": 0.30372,
      "cc": "RSD",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 972,
      "txt": "Сомоні",
      "rate": 3.5781,
      "cc": "TJS",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 981,
      "txt": "Ларі",
      "rate": 12.9506,
      "cc": "GEL",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 986,
      "txt": "Бразильський реал",
      "rate": 6.7712,
      "cc": "BRL",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 959,
      "txt": "Золото",
      "rate": 60824.55,
      "cc": "XAU",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 961,
      "txt": "Срібло",
      "rate": 693.86,
      "cc": "XAG",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 962,
      "txt": "Платина",
      "rate": 31525.42,
      "cc": "XPT",
      "exchangedate": "03.10.2022"
   },
   {
      "r030": 964,
      "txt": "Паладій",
      "rate": 80126.56,
      "cc": "XPD",
      "exchangedate": "03.10.2022"
   }
]

export function reducer(state: dataCurrency[] = initialState, action: StateAction | any) {
   switch (action.type) {
      case 'DELETE_ALL_ARCHIVED_NOTES':
         return { ...state, dataArchived: [] }
      default:
         return state
   }
}