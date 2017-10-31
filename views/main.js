var html = require('choo/html')

var TITLE = '🎌 Let\'s flag 🎌'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="sans-serif">
      <script>location.port&&"80"!=location.port||"https:"==location.protocol||(location.protocol="https:")</script>
      <h1 class="f-headline pa3 pa4-ns">
      🎌 Let's flag! 🎌
      </h1>

      <div class="ph3 ph4-ns">
        <div class="f-subheadline">Coming soon ;)</div>
      </div>
    </body>
  `
}
