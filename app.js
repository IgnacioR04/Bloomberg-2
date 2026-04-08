<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Market Terminal</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./assets/css/styles.css" />
</head>
<body>
  <div class="shell" id="appRoot">
    <header class="topbar">
      <div>
        <div class="brand-kicker">terminal inspired</div>
        <div class="brand-title">Global market workstation</div>
        <div class="brand-sub">Bloomberg-inspired visual layout, pero montado con JSON estático regenerado desde GitHub.</div>
      </div>
      <div class="status">
        <span class="status-dot"></span>
        <span id="updated">Cargando…</span>
      </div>
    </header>

    <nav class="nav">
      <button class="active" data-page="overview">Overview</button>
      <button data-page="markets">Markets</button>
      <button data-page="macro">Macro</button>
      <button data-page="news">News</button>
      <button data-page="radar">Radar</button>
    </nav>

    <section class="tape">
      <div class="tape-track" id="tickerTape"></div>
    </section>

    <main>
      <section class="page active" id="overviewPage"></section>
      <section class="page" id="marketsPage"></section>
      <section class="page" id="macroPage"></section>
      <section class="page" id="newsPage"></section>
      <section class="page" id="radarPage"></section>
    </main>

    <div class="footer-note">
      Esto no es tick-by-tick real ni asesoramiento financiero. Es un terminal snapshot-based preparado para GitHub Pages.
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3"></script>
  <script type="module" src="./assets/js/app.js"></script>
</body>
</html>
