const getFrontService = document.getElementById("service-front")
const getBackService = document.getElementById("service-back")
const getBackFrontService = document.getElementById("back-front")
const getService = document.getElementById("service")

getFrontService.addEventListener('click', () => {
  frontService()
});

getBackService.addEventListener('click', () => {
  backService()
});

function frontService() {
  getBackFrontService.setAttribute('class', 'service-back-front desative')
  const criarAbaFront = document.createElement("div")
  criarAbaFront.innerHTML = `<div class = "frontend">
  <h2>Front-End</h2>
  <a href="/index.html"><img id="voltar" src="/assets/imagens/voltar.png" alt="Voltar"></a>
  </div>
  <div class = "itens-service">
    <div class="itens">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>`
  service.appendChild(criarAbaFront);
}

function backService() {
  getBackFrontService.setAttribute('class', 'service-back-front desative')
  const criarAbaBack = document.createElement("div")
  criarAbaBack.innerHTML = `<div class = "backend">
  <h2>Back-End</h2>
  <a href="/index.html"><img id="voltar" src="/assets/imagens/voltar.png" alt="Voltar"></a>
  </div>
  <div class = "itens-service">
    <div class="itens">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>`
  service.appendChild(criarAbaBack);
}


