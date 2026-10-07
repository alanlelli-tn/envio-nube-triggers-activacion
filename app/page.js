import { data, meta, n, pct } from './content';

const A = data.all;
const T = [
  {
    d: data.t1,
    nombre: 'Agregar medio de envío',
    campana: 'Generación de etiquetas',
    contexto: 'Aparece al entrar a Configuración, Medios de envío, para quien suma un medio de envío.',
    mensaje: 'Menos tiempo en logística, más tiempo para vender',
  },
  {
    d: data.t2,
    nombre: 'Agregar envío personalizado',
    campana: 'Opciones de envío',
    contexto: 'Aparece al entrar a Envío personalizado, para quien configura sus propias tarifas.',
    mensaje: 'Más opciones de envío, más conversiones',
  },
];

const clicks = (d) => d.clicksActivar + d.clicksConocer;

function Kpi({ label, value, sub, strong }) {
  return (
    <div className={strong ? 'kpi kpi-strong' : 'kpi'}>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-sub">{sub}</div>
    </div>
  );
}

function Row({ k, v, sub }) {
  return (
    <div className="row">
      <dt>{k}</dt>
      <dd>
        {v}
        {sub ? <span className="row-sub">{sub}</span> : null}
      </dd>
    </div>
  );
}

function TriggerCard({ t }) {
  const d = t.d;
  return (
    <article className="card trigger">
      <h3>{t.nombre}</h3>
      <p className="muted small">Campaña “{t.campana}”. {t.contexto}</p>
      <p className="quote">“{t.mensaje}”</p>
      <dl className="rows">
        <Row k="Views totales" v={n(d.views)} sub="sesiones del in-app" />
        <Row k="Views únicas" v={n(d.uniqueViews)} sub="usuarios únicos" />
        <Row k="Clics en Activar Envío Nube" v={n(d.clicksActivar)} sub={`${pct(d.clicksActivar, d.views)} de las views · ${n(d.merchClickActivar)} merchants`} />
        <Row k="Clics en Conocer más" v={n(d.clicksConocer)} sub={`${pct(d.clicksConocer, d.views)} de las views · ${n(d.merchClickConocer)} merchants`} />
        <Row k="CTR" v={pct(clicks(d), d.views)} sub={`${n(clicks(d))} clics / ${n(d.views)} views`} />
        <Row k="Merchants únicos impactados" v={n(d.merchants)} sub="Store IDs únicos" />
        <Row k="Sin Envío Nube previo" v={n(d.base)} sub={`${pct(d.base, d.merchants)} de los impactados`} />
        <Row k="Conversiones" v={n(d.conv)} sub="atribuidas a este trigger (última view antes de activar)" />
        <Row k="CVR" v={pct(d.conv, d.base)} sub={`${n(d.conv)} / ${n(d.base)} sin Envío Nube previo (base propia del trigger)`} />
        <Row k="Paquetes despachados" v={n(d.packages)} sub={`${n(d.shippers)} merchants atribuidos a este trigger con envíos`} />
      </dl>
    </article>
  );
}

function Bars({ items, max }) {
  return (
    <div className="bars">
      {items.map((it) => (
        <div className="bar-row" key={it.label}>
          <div className="bar-label">{it.label}</div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${Math.max(2, (it.value / max) * 100)}%` }} />
          </div>
          <div className="bar-value">{n(it.value)}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const dayLabels = ['Mismo día', '1 día', '2 a 3 días', '4 a 7 días', '8 a 14 días', '15 días o más'];
  const days = dayLabels.map((label, i) => ({ label, value: A.days[i] }));
  const funnel = [
    { label: 'Merchants impactados', value: A.merchants },
    { label: 'Sin Envío Nube previo', value: A.base },
    { label: 'Activaron Envío Nube', value: A.conv },
    { label: 'Despacharon al menos un paquete', value: A.shippers },
  ];
  const [t1, t2] = [data.t1, data.t2];
  const oldAge = A.ages[3];
  const newAge = A.ages[0];

  return (
    <main>
      <header className="hero">
        <div className="wrap">
          <span className="pill">Lifecycle AR, Envío Nube</span>
          <h1>Resultados: triggers de activación de Envío Nube</h1>
          <p className="lead">
            Campañas de Inapp que interceptan a merchants que todavía no usan Envío Nube cuando intentan agregar un
            medio de envío o configuran un envío personalizado.
          </p>
          <dl className="meta">
            <div><dt>Responsable</dt><dd>{meta.responsable}</dd></div>
            <div><dt>Activación</dt><dd>{meta.activacion}</dd></div>
            <div><dt>Corte de datos</dt><dd>{meta.corte}</dd></div>
            <div><dt>Criterio de conversión</dt><dd>{meta.criterio}</dd></div>
          </dl>
        </div>
      </header>

      <div className="wrap">
        <section>
          <h2>Resultados generales</h2>
          <p className="muted">
            {meta.activacion} al {meta.corte}. Suma de los dos triggers, con merchants deduplicados. Audiencia:
            merchants de Argentina sin Envío Nube configurado.
          </p>
          <div className="kpis">
            <Kpi label="Views totales" value={n(A.views)} sub="Sesiones de los dos in-app" />
            <Kpi label="Views únicas" value={n(A.uniqueViews)} sub={`Usuarios únicos, sin contar ${n(data.overlap.users)} que vieron ambos`} />
            <Kpi label="Clics en Activar Envío Nube" value={n(A.clicksActivar)} sub={`${pct(A.clicksActivar, A.views)} de las views`} />
            <Kpi label="Clics en Conocer más" value={n(A.clicksConocer)} sub={`${pct(A.clicksConocer, A.views)} de las views`} />
            <Kpi label="CTR" value={pct(clicks(A), A.views)} sub={`${n(clicks(A))} clics en Activar o Conocer más / views totales`} />
            <Kpi label="Merchants únicos impactados" value={n(A.merchants)} sub={`Store IDs únicos. ${n(data.overlap.merchants)} vieron ambos triggers`} />
            <Kpi label="Sin Envío Nube previo" value={n(A.base)} sub="Base elegible para convertir" />
            <Kpi label="Conversiones" value={n(A.conv)} sub="Merchants que activaron Envío Nube tras la primera view" strong />
            <Kpi label="CVR" value={pct(A.conv, A.base)} sub={`${n(A.conv)} / ${n(A.base)} sin Envío Nube previo`} strong />
            <Kpi label="Paquetes despachados" value={n(A.packages)} sub={`${n(A.shippers)} de los ${n(A.conv)} merchants convertidos ya despacharon`} strong />
          </div>

          <div className="card">
            <h3>Qué pasó con los merchants impactados</h3>
            <Bars items={funnel} max={A.merchants} />
          </div>
        </section>

        <section>
          <h2>Resultados por trigger</h2>
          <p className="muted">
            Mismas métricas para cada campaña. Si un merchant vio los dos triggers antes de activar, la conversión
            (y sus paquetes) se atribuye solo a la última comunicación que vio: las conversiones y los paquetes de los
            dos triggers suman el consolidado. Los merchants impactados y la base sí se superponen
            ({n(data.overlap.merchants)} vieron ambos).
          </p>
          <div className="grid2">
            {T.map((t) => (
              <TriggerCard t={t} key={t.nombre} />
            ))}
          </div>
        </section>

        <section>
          <h2>Quiénes activaron Envío Nube a partir del flow</h2>
          <p className="muted">
            {n(A.conv)} merchants sin Envío Nube previo con su primera señal de uso en la fecha de su primera view o
            después. {n(data.attribution.duplicated)} de ellos vieron los dos triggers antes de activar: se atribuyeron
            a la última comunicación vista ({n(data.attribution.toT1)} a “Agregar medio de envío” y {n(data.attribution.toT2)} a
            “Agregar envío personalizado”).
          </p>

          <div className="grid2">
            <div className="card">
              <h3>Conversión según interacción</h3>
              <p className="muted small">Hicieron clic: al menos una sesión cerrada con Activar o Conocer más.</p>
              <table className="compact">
                <thead>
                  <tr><th></th><th>Hicieron clic</th><th>No hicieron clic</th></tr>
                </thead>
                <tbody>
                  {[['Agregar medio de envío', t1], ['Agregar envío personalizado', t2], ['Consolidado', A]].map(([name, d]) => (
                    <tr key={name}>
                      <th scope="row">{name}</th>
                      <td><strong>{pct(d.convClick, d.baseClick)}</strong><span className="row-sub">{n(d.convClick)} de {n(d.baseClick)}</span></td>
                      <td><strong>{pct(d.convNoClick, d.baseNoClick)}</strong><span className="row-sub">{n(d.convNoClick)} de {n(d.baseNoClick)}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="note">
                {pct(A.convNoClick, A.conv, 0)} de las conversiones ({n(A.convNoClick)} de {n(A.conv)}) ocurrió sin clic en el in-app.
              </p>
            </div>

            <div className="card">
              <h3>Días desde la primera view hasta activar</h3>
              <p className="muted small">Mediana: {A.medianDays.toLocaleString('es-AR')} días.</p>
              <Bars items={days} max={Math.max(...A.days)} />
            </div>
          </div>

          <div className="grid2">
            <div className="card wide">
              <h3>Paquetes despachados por Envío Nube</h3>
              <p className="muted small">Paquetes con fecha de posteo posterior a la activación, de los merchants convertidos.</p>
              <dl className="rows">
                <Row k="Paquetes" v={n(A.packages)} sub="consolidado" />
                <Row k="Merchants que despacharon" v={n(A.shippers)} sub={`${pct(A.shippers, A.conv)} de los convertidos`} />
                <Row k="Mediana por merchant que despachó" v={A.pkgMedianShipper.toLocaleString('es-AR')} sub="paquetes" />
                <Row k="Los 10 que más despachan" v={pct(A.pkgTop10, A.packages, 0)} sub={`${n(A.pkgTop10)} paquetes`} />
                <Row k="Convertidos sin etiqueta todavía" v={n(A.convSelOnly)} sub={`${pct(A.convSelOnly, A.conv, 0)}: un comprador eligió Envío Nube, pero no generaron etiquetas`} />
              </dl>
            </div>
          </div>
        </section>

        <section>
          <h2>Insights</h2>
          <div className="grid2">
            <article className="card insight">
              <h3>{pct(A.conv, A.base)} activó Envío Nube y {pct(A.shippers, A.conv, 0)} ya despacha</h3>
              <p>
                {n(A.conv)} de {n(A.base)} merchants sin uso previo activaron, y {n(A.shippers)} ya generaron
                {' '}{n(A.packages)} paquetes. El valor está concentrado: los 10 que más envían suman {pct(A.pkgTop10, A.packages, 0)} y uno solo, {pct(A.pkgTop1, A.packages, 0)}.
              </p>
            </article>
            <article className="card insight">
              <h3>“Agregar envío personalizado” convierte más con menos clics</h3>
              <p>
                CVR de {pct(t2.conv, t2.base)} contra {pct(t1.conv, t1.base)}, con un CTR de {pct(clicks(t2), t2.views, 0)} contra {pct(clicks(t1), t1.views, 0)}.
                Es una audiencia más chica, pero más cerca de decidir cómo enviar.
              </p>
            </article>
            <article className="card insight">
              <h3>El clic solo pesa en el trigger 2</h3>
              <p>
                En “Agregar envío personalizado”, {pct(t2.convClick, t2.baseClick)} de quienes hicieron clic activó, contra {pct(t2.convNoClick, t2.baseNoClick)} de quienes no.
                En “Agregar medio de envío” casi no hay diferencia ({pct(t1.convClick, t1.baseClick)} contra {pct(t1.convNoClick, t1.baseNoClick)}), y un CTR alto: en este trigger el clic no distingue a quienes terminan activando.
              </p>
            </article>
            <article className="card insight">
              <h3>La activación no es inmediata</h3>
              <p>
                La mediana es de {A.medianDays.toLocaleString('es-AR')} días y {pct(A.days[5], A.conv, 0)} de las conversiones llegó pasados 15 días. Quienes vieron el trigger hace {oldAge.label.toLowerCase()} tienen {pct(oldAge.conv, oldAge.base)} de CVR;
                los de {newAge.label.toLowerCase()}, {pct(newAge.conv, newAge.base)}. Conviene volver a medir.
              </p>
            </article>
            <article className="card insight wide">
              <h3>{pct(A.prior, A.merchants)} de los impactados ya usaba Envío Nube</h3>
              <p>
                La audiencia del flow no los excluyó: en el trigger 2 son {pct(t2.prior, t2.merchants, 0)}. La condición de audiencia combina con “o” cuatro exclusiones sobre las opciones de envío de HubSpot,
                lo que en la práctica deja pasar a casi cualquiera. Vale revisar la segmentación en Userflow, o excluirlos con una lista armada desde Databricks.
              </p>
            </article>
          </div>
        </section>

        <section>
          <h2>Metodología</h2>
          <ul className="method">
            <li><strong>Canal:</strong> views, views únicas y clics salen de la API de Userflow para los flows “Trigger x Comportamiento - Generación de etiquetas” y “Trigger x Comportamiento - Opciones de envío”, desde el {meta.activacion} hasta el {meta.corte}. Views totales = sesiones; views únicas = usuarios únicos; el clic en cada botón es un evento propio. Cada sesión termina con a lo sumo un clic.</li>
            <li><strong>CTR:</strong> clics en Activar Envío Nube o Conocer más / views totales. Los CTR por botón usan el mismo denominador.</li>
            <li><strong>Cruce:</strong> el export de sesiones de Userflow ({n(data.export.sessionsT1)} y {n(data.export.sessionsT2)} sesiones, corte {meta.corteHora}) se cruza por Store ID (columna Company: ID) con la tabla de envíos de Argentina en Databricks (NuvemLens).</li>
            <li><strong>Envío Nube previo:</strong> merchant con una etiqueta de Envío Nube, o con un pedido pagado donde el comprador eligió Envío Nube en el checkout, anterior al día de su primera view. Para el consolidado se usa la primera view de cualquiera de los dos triggers.</li>
            <li><strong>Atribución:</strong> una conversión se atribuye a una sola comunicación: la última que el merchant visualizó hasta el día de su activación (inclusive). Los {n(data.attribution.duplicated)} merchants que vieron ambos triggers antes de activar se asignan por la view más reciente; así las conversiones y los paquetes por trigger suman el consolidado. El CVR de cada trigger usa como denominador todos los merchants sin Envío Nube previo que lo vieron, aunque también hayan visto el otro; por eso las bases por trigger no suman la base consolidada.</li>
            <li><strong>Conversión:</strong> merchant sin Envío Nube previo con una primera señal de uso (pedido con Envío Nube elegido o primera etiqueta) en la fecha de su primera view o después. CVR = conversiones / merchants sin Envío Nube previo. No hay una fecha de configuración disponible: un merchant que configuró antes de la view y vendió después cuenta como conversión. Sin atribución causal, incluye activaciones que podrían haber ocurrido igual.</li>
            <li><strong>Paquetes:</strong> envíos de Envío Nube con fecha de posteo desde el {meta.activacion}, de los merchants convertidos. Incluye envíos asociados a pedidos y envíos avulsos.</li>
            <li><strong>Diferencias entre fuentes:</strong> la API de Userflow incluye sesiones posteriores al export y reporta {n(9386)} y {n(4467)} merchants únicos, contra {n(data.export.merchantsT1)} y {n(data.export.merchantsT2)} del export. Esas sesiones no se pueden asociar a un Store ID desde la API. Views únicas del consolidado = suma de ambos triggers menos {n(data.overlap.users)} usuarios del export que vieron los dos.</li>
            <li><strong>Límites:</strong> el export no distingue Activar de Conocer más por merchant; “hizo clic” es cualquiera de los dos. La fecha de los eventos es diaria, por lo que una activación el mismo día de la primera view ({n(A.days[0])} casos) cuenta como conversión.</li>
          </ul>
        </section>
      </div>

      <footer>
        <div className="wrap">
          Lifecycle AR, Envío Nube. Datos de Userflow y Databricks (NuvemLens). Corte: {meta.corte}.
        </div>
      </footer>
    </main>
  );
}
