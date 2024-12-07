let inuptLoginEm = document.querySelector('#inuptLoginEm')
let inuptLoginPass = document.querySelector('#inuptLoginPass')
let btnLogin = document.querySelector('#btnLogin')
let loginError = document.querySelector('#loginError')
let noEmail   = document.querySelector('#noEmail')
let valPassReg = /^[1-9]{5,}$/
let valEmReg = /^[a-zA-Z]{3,}[0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/


let users = JSON.parse(localStorage.getItem('person'))






btnLogin.addEventListener('click' , getLogin)
function getLogin(){

    if(  funEmRegex() == true    && funPassRegex()  == true   && users !== null    ){




    let result =    users.find( elment   =>  {

            return elment.Email.toLowerCase() == inuptLoginEm.value.toLowerCase() && elment.pass == inuptLoginPass.value

          
           


        })

       
        
        if(result !== undefined ){
            window.location.href = "welcome.html";
            console.log(result.check);
            result.check = true

           
            

            localStorage.setItem('person', JSON.stringify(users))
           
            noEmail.classList.add('d-none')
        }else{
          noEmail.classList.remove('d-none')
        }


        




        loginError.classList.add('d-none')
    }else{
      loginError.classList.remove('d-none')
    }






}

















inuptLoginEm.addEventListener('input' , funEmRegex)
function funEmRegex(){

   
    if(valEmReg.test(inuptLoginEm.value)){

        inuptLoginEm.classList.add('is-valid')
        inuptLoginEm.classList.remove('is-invalid')
        return true
       
      }else{
        inuptLoginEm.classList.add('is-invalid')
        return false
      }



}

inuptLoginPass.addEventListener('input' , funPassRegex)
function funPassRegex(){

   
    if(valPassReg.test(inuptLoginPass.value)){

        inuptLoginPass.classList.add('is-valid')
        inuptLoginPass.classList.remove('is-invalid')
        return true
       
      }else{
        inuptLoginPass.classList.add('is-invalid')
        return false
      }



}