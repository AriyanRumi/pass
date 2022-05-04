let eye =document.querySelector('.eye')
let inputField =document.querySelector('input')
let title =document.querySelector('.title')


eye.addEventListener('click',()=>{
    let slashEye =`<i class="fa fa-eye-slash"></i>`
    let orginalEye =`<i class="fa fa-eye"></i>`
    let t =inputField.getAttribute('type') // get type attribute in html inpout tag
    if(t=='password'){
        inputField.setAttribute('type','text')
        eye.innerHTML=orginalEye;
    }else{
        inputField.setAttribute('type','password')
        eye.innerHTML=slashEye;
    }
})


inputField.addEventListener('keyup',()=>{

    let pf =document.querySelectorAll('li')
    let makeArray =Array.from(pf)
    let inputVal =inputField.value;


    // password length must 8 character
    if(inputVal.length >= 8){
        makeArray[0].style.color ='green'

    }else{
        makeArray[0].style.color ='white'
    }

  // include one number and one special sign

  if(inputVal.includes(2)){
      makeArray[1].style.color ='green'
  }


})
