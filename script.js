let no=document.querySelector('#no-btn')
let yes=document.querySelector('#yes')
console.log(no)
const moveTarget=()=>{
  const maxWidth=200;
  const maxHeight=200;
  const randomx=Math.floor(Math.random()*maxWidth)
  const randomy=Math.floor(Math.random()*maxHeight)

  no.style.left=randomx + 'px'
  no.style.top=randomy  + 'px'
}
no.addEventListener('click',()=>{
  moveTarget();  
})
yes.addEventListener('click',()=>{
  alert("Thank you so much 😍 Love you too...💕")
  
})