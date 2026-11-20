// Contenido editable del tablero. Para actualizar números, editá solo este objeto.
// Views y clics: API de Userflow. Merchants, conversiones y paquetes: export de sesiones + Databricks (NuvemLens).
export const meta = {
  responsable: 'Alan Lelli',
  activacion: '26 ago 2026',
  corte: '31 oct 2026',
  criterio: 'Primera señal de uso de Envío Nube: pedido con Envío Nube elegido en el checkout o primera etiqueta',
};

export const data = {
 "t1": {
  "merchants": 13851,
  "priorLabel": 1765,
  "priorSel": 270,
  "prior": 2035,
  "base": 11816,
  "conv": 865,
  "baseClick": 6836,
  "convClick": 518,
  "baseNoClick": 4980,
  "convNoClick": 347,
  "convWithLabel": 704,
  "convSelOnly": 161,
  "packages": 10218,
  "shippers": 624,
  "pkgMedianShipper": 2.0,
  "pkgTop1": 1011,
  "pkgTop10": 5021,
  "days": [
   109,
   63,
   91,
   112,
   139,
   351
  ],
  "medianDays": 10.0,
  "ages": [
   {
    "label": "0 a 6 días",
    "base": 1109,
    "conv": 21
   },
   {
    "label": "7 a 13 días",
    "base": 1013,
    "conv": 50
   },
   {
    "label": "14 a 27 días",
    "base": 2229,
    "conv": 125
   },
   {
    "label": "28 días o más",
    "base": 7465,
    "conv": 669
   }
  ],
  "views": 14697,
  "uniqueViews": 14000,
  "clicksActivar": 4304,
  "clicksConocer": 3802,
  "merchClickActivar": 4206,
  "merchClickConocer": 3719
 },
 "t2": {
  "merchants": 6736,
  "priorLabel": 1712,
  "priorSel": 217,
  "prior": 1929,
  "base": 4807,
  "conv": 530,
  "baseClick": 1348,
  "convClick": 197,
  "baseNoClick": 3459,
  "convNoClick": 333,
  "convWithLabel": 435,
  "convSelOnly": 95,
  "packages": 6012,
  "shippers": 396,
  "pkgMedianShipper": 3.0,
  "pkgTop1": 849,
  "pkgTop10": 2528,
  "days": [
   72,
   50,
   49,
   78,
   82,
   199
  ],
  "medianDays": 9.0,
  "ages": [
   {
    "label": "0 a 6 días",
    "base": 467,
    "conv": 12
   },
   {
    "label": "7 a 13 días",
    "base": 407,
    "conv": 20
   },
   {
    "label": "14 a 27 días",
    "base": 963,
    "conv": 93
   },
   {
    "label": "28 días o más",
    "base": 2970,
    "conv": 405
   }
  ],
  "views": 7300,
  "uniqueViews": 6826,
  "clicksActivar": 1088,
  "clicksConocer": 797,
  "merchClickActivar": 1062,
  "merchClickConocer": 782
 },
 "all": {
  "merchants": 18202,
  "priorLabel": 2958,
  "priorSel": 406,
  "prior": 3364,
  "base": 14838,
  "conv": 1395,
  "baseClick": 7819,
  "convClick": 813,
  "baseNoClick": 7019,
  "convNoClick": 582,
  "convWithLabel": 1139,
  "convSelOnly": 256,
  "packages": 16230,
  "shippers": 1020,
  "pkgMedianShipper": 2.0,
  "pkgTop1": 1011,
  "pkgTop10": 5853,
  "days": [
   152,
   99,
   141,
   179,
   239,
   585
  ],
  "medianDays": 11.0,
  "ages": [
   {
    "label": "0 a 6 días",
    "base": 1376,
    "conv": 31
   },
   {
    "label": "7 a 13 días",
    "base": 1244,
    "conv": 66
   },
   {
    "label": "14 a 27 días",
    "base": 2820,
    "conv": 195
   },
   {
    "label": "28 días o más",
    "base": 9398,
    "conv": 1103
   }
  ],
  "views": 21997,
  "uniqueViews": 18485,
  "clicksActivar": 5392,
  "clicksConocer": 4599
 },
 "attribution": {
  "duplicated": 292,
  "toT1": 97,
  "toT2": 195
 },
 "overlap": {
  "users": 2341,
  "merchants": 2385
 },
 "export": {
  "sessionsT1": 14697,
  "sessionsT2": 7300,
  "usersT1": 14000,
  "usersT2": 6826,
  "merchantsT1": 13851,
  "merchantsT2": 6736
 },
 "api": {
  "merchantsT1": 13877,
  "merchantsT2": 6763
 }
};

const nf = new Intl.NumberFormat('es-AR');
export const n = (v) => nf.format(v);
export const pct = (a, b, d = 1) =>
  b ? ((a / b) * 100).toLocaleString('es-AR', { minimumFractionDigits: d, maximumFractionDigits: d }) + '%' : '–';
