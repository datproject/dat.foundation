const html = require('choo/html')

module.exports = function (props) {
  return html`
    <section class="${props.klass}">
      <div class="pa3 ph3 pa4-m mw8-ns center-ns">
        <header>
          <h2 class="f2 mb0">Consortium of Projects</h2>
        </header>
        <div class="pt3 pb5 flex flex-wrap w-100">
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://beakerbrowser.com/" title="Beaker Browser">
            <img class="h3 w-auto" src="/public/img/beaker.png" alt="Beaker Browser">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://wireline.io/" title="Wireline">
            <img class="h3 w-auto" src="/public/img/wireline.png" alt="Wireline">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://peermaps.org/" title="Peermaps">
            <img class="h3 w-auto" src="/public/img/peermaps.png" alt="Peermaps">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://inkandswitch.com/" title="Ink & Switch">
            <img class="h3 w-auto" src="/public/img/inkandswitch.png" alt="Ink & Switch">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://hyperdivision.dk/" title="Hyperdivision">
            <img class="h3 w-auto" src="/public/img/hyperdivision.png" alt="Hyperdivision">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://ara.one/" title="Ara">
            <img class="h3 w-auto" src="/public/img/ara.png" alt="Ara">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://digital-democracy.org/" title="Digital Democracy">
            <img class="h3 w-auto" src="/public/img/dd.png" alt="Digital Democracy">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://github.com/geut/" title="GEUT">
            <img class="h3 w-auto" src="/public/img/geut.png" alt="GEUT">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://cabal-club.github.io/" title="Cabal Chat">
            <img class="h3 w-auto" src="/public/img/cabal.png" alt="Cabal">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://datrs.yoshuawuyts.com/" title="Dat Rust">
            <img class="h3 w-auto" src="/public/img/datrs.png" alt="Dat Rust">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://datcxx.github.io/" title="Dat CXX">
            <img class="h3 w-auto" src="/public/img/datcxx.png" alt="Dat CXX">
          </a>
          <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://github.com/tdjsnelling/dat-keyserver" title="dat-keyserver">
            <img class="h2 w-auto" src="/public/img/dat-keyserver.png" alt="dat-keyserver">
          </a>
        </div>
      </div>
    </section>
  `
}
