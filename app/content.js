// Contenido editable del tablero. Para actualizar números, editá solo este objeto.
// Views y clics: API de Userflow. Merchants, conversiones y paquetes: export de sesiones + Databricks (NuvemLens).
export const meta = {
  responsable: 'Alan Lelli',
  activacion: '26 ago 2026',
  corte: '7 oct 2026',
  corteHora: '12:50 UTC',
  criterio: 'Primera señal de uso de Envío Nube: pedido con Envío Nube elegido en el checkout o primera etiqueta',
};

export const data = {
 "t1": {
  "merchants": 9348,
  "priorLabel": 1215,
  "priorSel": 185,
  "prior": 1400,
  "base": 7948,
  "conv": 431,
  "baseClick": 4532,
  "convClick": 255,
  "baseNoClick": 3416,
  "convNoClick": 176,
  "convWithLabel": 309,
  "convSelOnly": 122,
  "packages": 3748,
  "shippers": 288,
  "pkgMedianShipper": 2.0,
  "pkgTop1": 862,
  "pkgTop10": 2348,
  "days": [
   79,
   38,
   64,
   71,
   72,
   107
  ],
  "medianDays": 6.0,
  "ages": [
   {
    "label": "0 a 6 días",
    "base": 1003,
    "conv": 22
   },
   {
    "label": "7 a 13 días",
    "base": 1383,
    "conv": 60
   },
   {
    "label": "14 a 27 días",
    "base": 2477,
    "conv": 126
   },
   {
    "label": "28 días o más",
    "base": 3085,
    "conv": 223
   }
  ],
  "views": 9731,
  "uniqueViews": 9465,
  "clicksActivar": 2867,
  "clicksConocer": 2489,
  "merchClickActivar": 2820,
  "merchClickConocer": 2452
 },
 "t2": {
  "merchants": 4439,
  "priorLabel": 1110,
  "priorSel": 146,
  "prior": 1256,
  "base": 3183,
  "conv": 291,
  "baseClick": 893,
  "convClick": 116,
  "baseNoClick": 2290,
  "convNoClick": 175,
  "convWithLabel": 219,
  "convSelOnly": 72,
  "packages": 1524,
  "shippers": 203,
  "pkgMedianShipper": 2.0,
  "pkgTop1": 160,
  "pkgTop10": 775,
  "days": [
   49,
   29,
   33,
   59,
   51,
   70
  ],
  "medianDays": 6.0,
  "ages": [
   {
    "label": "0 a 6 días",
    "base": 460,
    "conv": 18
   },
   {
    "label": "7 a 13 días",
    "base": 495,
    "conv": 37
   },
   {
    "label": "14 a 27 días",
    "base": 972,
    "conv": 80
   },
   {
    "label": "28 días o más",
    "base": 1255,
    "conv": 156
   }
  ],
  "views": 4669,
  "uniqueViews": 4502,
  "clicksActivar": 711,
  "clicksConocer": 523,
  "merchClickActivar": 700,
  "merchClickConocer": 515
 },
 "all": {
  "merchants": 12337,
  "priorLabel": 2035,
  "priorSel": 290,
  "prior": 2325,
  "base": 10012,
  "conv": 722,
  "baseClick": 5198,
  "convClick": 414,
  "baseNoClick": 4814,
  "convNoClick": 308,
  "convWithLabel": 528,
  "convSelOnly": 194,
  "packages": 5272,
  "shippers": 491,
  "pkgMedianShipper": 2.0,
  "pkgTop1": 862,
  "pkgTop10": 2567,
  "days": [
   106,
   59,
   98,
   129,
   137,
   193
  ],
  "medianDays": 6.0,
  "ages": [
   {
    "label": "0 a 6 días",
    "base": 1279,
    "conv": 34
   },
   {
    "label": "7 a 13 días",
    "base": 1674,
    "conv": 91
   },
   {
    "label": "14 a 27 días",
    "base": 3066,
    "conv": 194
   },
   {
    "label": "28 días o más",
    "base": 3992,
    "conv": 403
   }
  ],
  "views": 14400,
  "uniqueViews": 12542,
  "clicksActivar": 3578,
  "clicksConocer": 3012
 },
 "attribution": {
  "duplicated": 146,
  "toT1": 48,
  "toT2": 98
 },
 "overlap": {
  "users": 1425,
  "merchants": 1450
 },
 "export": {
  "sessionsT1": 9707,
  "sessionsT2": 4656,
  "usersT1": 9443,
  "usersT2": 4490,
  "merchantsT1": 9348,
  "merchantsT2": 4439
 }
};

const nf = new Intl.NumberFormat('es-AR');
export const n = (v) => nf.format(v);
export const pct = (a, b, d = 1) =>
  b ? ((a / b) * 100).toLocaleString('es-AR', { minimumFractionDigits: d, maximumFractionDigits: d }) + '%' : '–';
