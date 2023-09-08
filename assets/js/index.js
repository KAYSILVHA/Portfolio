const getFrontService = document.getElementById("service-front")
const getBackService = document.getElementById("service-back")
const getBackFrontService = document.getElementById("back-front")
const getService = document.getElementById("service")
const getVoltar = document.getElementById("voltar")

getFrontService.addEventListener('click', ()=>{
  front()
});

getBackService.addEventListener('click', ()=>{
  back()
});

getVoltar.addEventListener('click', ()=>{
  recarregar()
});


function front(){
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

function back(){
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


function recarregar(){
  location.reload()
}