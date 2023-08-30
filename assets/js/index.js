const getFrontService = document.getElementById("service-front")
const getBackService = document.getElementById("service-back")
const getBackFrontService = document.getElementById("service-back-front")



getFrontService.addEventListener('click', ()=>{
  front()
});

getBackService.addEventListener('click', ()=>{
  back()
});



function front(){
  getBackFrontService.setAttribute('style', 'display: none')
  console.log("Oi")
}

function back(){
  getBackFrontService.setAttribute('class', 'service-back-front desative')
  console.log("Oi")
}