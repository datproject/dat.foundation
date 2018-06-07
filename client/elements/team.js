const html = require('choo/html')
const teamInfo = require('../team-info')

module.exports = function () {
  const flexClass = 'flex flex-wrap flex-row justify-between items-stretch'

  return html`
    <div>
      <h2 class="horizontal-rule">Dat Project Governance Team</h2>
      <p>asdfasdf</p>
      <div class="${flexClass} w-100">
        ${teamInfo.governance.map((person) => {
    return personBox(person)
  })}
      </div>
      <h2 class="horizontal-rule">Dat Protocol Working Group</h2>
      <p>Description</p>
      <div class="${flexClass} w-100">
        ${teamInfo.dpwg.map((person) => {
          person.description = null
    return personBox(person)
  })}
      </div>
      <h2 class="horizontal-rule">Community Collaborators</h2>
      <p>Folks working on Dat projects</p>
      <div class="${flexClass} w-100">
        ${teamInfo.other.map((person) => {
    return personBox(person)
  })}
      </div>
      <h2 class="horizontal-rule">Alumni</h2>
      <div class="${flexClass} w-100">
        ${teamInfo.alumni.map((person) => {
    person.description = null
    return personBox(person)
  })}
      </div>
    </div>
  `

  function personBox (info) {
    const description = html`<p class="lh-copy measure center f5 fw4 black-70"></p>`
    description.innerHTML = info.description
    return html`
      <div class="inline-flex w-100 w-third-l w-50-m pa3">
        <div class="bg-white w-100 pa3 pa4-ns b--dat-blue ba bw2">
          <div class="tc">
            <a href="http://github.com/${info.github}"><img src="${avatar(info.github)}" class="br-100 h3 w3 dib" title="${info.name}" alt="${info.name}"></a>
            <h4 class="f4 mt3 mb0">${info.name}</h4>
             ${info.description ? html`<hr class="mv3 mw3 bb bw1 b--black-10">` : ''}
          </div>
          ${info.description ? description : ''}
        </div>
      </div>
    `
  }

  function avatar (username) {
    return `https://github.com/${username}.png`
  }
}
