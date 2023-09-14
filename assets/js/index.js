const getFrontService = document.getElementById("service-front")
const getBackService = document.getElementById("service-back")
const getBackFrontService = document.getElementById("back-front-service")
const getBackFrontProjects = document.getElementById("backfront-projects")
const service = document.getElementById("service")
const projects = document.getElementById("projects")
const getFrontProjects = document.getElementById("projects-front")
const getBackProjects = document.getElementById("projects-back")
const getVoltar = document.getElementById("voltar")



getFrontService.addEventListener('click', () => {
  frontService()
});
getBackService.addEventListener('click', () => {
  backService()
});

getFrontProjects.addEventListener('click', () => {
  frontProjects()
});
getBackProjects.addEventListener('click', () => {
  backProjects()
});

function reload() {
  location.reload()
}
function frontService() {
  getBackFrontService.setAttribute('class', 'service-back-front desative')
  const criarAbaFront = document.createElement("div")
  criarAbaFront.innerHTML = `<div class = "frontend">
  <h2>Front-End</h2>
  <img id="voltar" src="/assets/imagens/voltar.png" alt="Voltar" onclick = "reload()">
  </div>
  <div class = "itens-service">
    <div class="itens">
      <div class="item">
        <img src="/assets/imagens/html.png" alt="HTML">
        <h3>HTML</h3>
      </div>
      <div class="item">
        <img src="/assets/imagens/css.png" alt="CSS">
        <h3>CSS</h3>
      </div>
      <div class="item">
        <img src="/assets/imagens/js.png" alt="JavaScript">
        <h3>JavaScript</h3>
      </div>
      <div class="item">
        <img src="/assets/imagens/figma.png" alt="Figma">
        <h3>Figma</h3>
      </div>
      <div class="item">
        <img src="/assets/imagens/mockflow.png" alt="Mockflow">
        <h3>Mockflow</h3>
      </div>
      <div class="item">
        <img src="/assets/imagens/canva.png" alt="Canva">
        <h3>Canva</h3>
      </div>
    </div>
  </div>`
  service.appendChild(criarAbaFront);
}
function backService() {
  getBackFrontService.setAttribute('class', 'service-back-front desative')
  const criarAbaBack = document.createElement("div")
  criarAbaBack.innerHTML = `<div class = "backend">
  <h2>Back-End</h2>
  <img id="voltar" src="/assets/imagens/voltar.png" alt="Voltar" onclick = "reload()">
  </div>
  <div class = "itens-service">
    <div class="itens">
      <div class="item">
        <img src="/assets/imagens/java.png" alt="Java">
        <h3>Java</h3>
      </div>
      <div class="item">
        <img src="/assets/imagens/python.png" alt="Python">
        <h3>Python</h3>
      </div>
      <div class="item">
        <img src="/assets/imagens/js.png" alt="JavaScript">
        <h3>JavaScript</h3>
      </div>
      <div class="item">
        <img src="/assets/imagens/mysql.png" alt="MySQL">
        <h3>MySQL</h3>
      </div>
      <div class="item">
        <img src="/assets/imagens/node.png" alt="Node.Js">
        <h3>Node.Js</h3>
      </div>
    </div>
  </div>`
  service.appendChild(criarAbaBack);
}


function frontProjects() {
  getBackFrontProjects.setAttribute('class', 'projects-back-front desative')
  const criarAbaFrontProjects = document.createElement("div")
  criarAbaFrontProjects.innerHTML = `<div class = "frontend">
  <h2>Front-End</h2>
  <img id="voltar" src="/assets/imagens/voltar.png" alt="Voltar" onclick = "reload()">
  </div>
  <div class = "itens-projects">
    <div class="itens">
      <div class="item-project um">
        <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
      <div class="item-project dois">
      <h2>Ohayo Confeitaria</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um cardápio bonito e responsivo. Aproveitei e criei um site inteiro para uma confeitaria fictícia!</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/cardapioElasNaTech-ohayoConfeitaria/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/cardapioElasNaTech-ohayoConfeitaria">Ver Repo</a>
        </div>
      </div>
      <div class="item-project tres">
      <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
      <div class="item-project quatro">
      <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
      <div class="item-project cinco">
      <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
      <div class="item-project seis">
      <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
      <div class="item-project sete">
      <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
      <div class="item-project oito">
      <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
      <div class="item-project nove">
      <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
      <div class="item-project dez">
      <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
      <div class="item-project onze">
      <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
      <div class="item-project doze">
      <h2>Vida na Água</h2>
        <p>Este foi um projeto desenvolvido no curso oferecido pela ElasNaTech.
        O objetivo era construir um site bonito e responsivo sobre um dos 17 objetivos da ODS.</p>
        <div class="atalhos">
          <a href="https://kaysilvha.github.io/codJA-DesafioElasNaTech/">Ver Projeto</a>
          <a href="https://github.com/KAYSILVHA/codJA-DesafioElasNaTech">Ver Repo</a>
        </div>
      </div>
    </div>
  </div>`
  projects.appendChild(criarAbaFrontProjects);
}
function backProjects() {
  getBackFrontProjects.setAttribute('class', 'projects-back-front desative')
  const criarAbaBackProjects = document.createElement("div")
  criarAbaBackProjects.innerHTML = `<div class = "backend">
  <h2>Back-End</h2>
  <img id="voltar" src="/assets/imagens/voltar.png" alt="Voltar" onclick = "reload()">
  </div>
  <div class = "itens-service">
  <div class="itens">
    <div class="item-project"></div>
    <div class="item-project"></div>
    <div class="item-project"></div>
    <div class="item-project"></div>
    <div class="item-project"></div>
    <div class="item-project"></div>
    <div class="item-project"></div>
    <div class="item-project"></div>
    <div class="item-project"></div>
    <div class="item-project"></div>
    <div class="item-project"></div>
    <div class="item-project"></div>
  </div>
  </div>`
  projects.appendChild(criarAbaBackProjects);
}
