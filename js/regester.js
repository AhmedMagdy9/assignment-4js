
let inNameReg = document.querySelector('#inNameReg')
let inEmailReg = document.querySelector('#inEmailReg')
let inPassReg = document.querySelector('#inPassReg')
let btnReg = document.querySelector('#btnReg')
let dataCorr = document.querySelector('#dataCorr')
let dataAlready = document.querySelector('#dataAlready')
let valNameReg = /^[a-zA-Z]{5,}$/
let valPassReg = /^[1-9]{5,}$/
let valEmReg = /^[a-zA-Z]{3,}[0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

let users = [];

if(localStorage.getItem('person') !== null){
    users = JSON.parse(localStorage.getItem('person'))
    
}



btnReg.addEventListener('click' , add)

function add(){


    if( valNameRegex() == true && valEmRegex() == true    && valPassRegex()  == true       ){


    if( localStorage.getItem('person') !== null){

    if( getEmail() == true){

          
    person = {
            name : inNameReg.value,
            Email : inEmailReg.value,
            pass : inPassReg.value,
            check : false
    
            }
    
            users.push(person)
            localStorage.setItem('person', JSON.stringify(users))

            
            window.location.href = "index.html";
           
         
           

           }else{
           
           dataAlready.classList.remove('d-none')
          
           }

           }else{

    person = {
        name : inNameReg.value,
        Email : inEmailReg.value,
        pass : inPassReg.value,
        check : false
     
          }

          users.push(person)
          localStorage.setItem('person', JSON.stringify(users))
    
         window.location.href = "index.html";
    

}

 

    dataCorr.classList.add('d-none')
   
    
    }else{
        dataCorr.classList.remove('d-none')
       
    }
   
    
   
    

}



function getEmail(){

    
        
    for (let i = 0; i < users.length; i++) {

        if( users[i].Email ==  inEmailReg.value){
            return false
        }else{
            return true
        }
       
        
    }
    

}
 

//             regester validation                             //

inNameReg.addEventListener('input' , valNameRegex)
function valNameRegex(){

   
    if(valNameReg.test(inNameReg.value)){

        inNameReg.classList.add('is-valid')
        inNameReg.classList.remove('is-invalid')
        return true
       
      }else{
        inNameReg.classList.add('is-invalid')
        return false
      }



}

inEmailReg.addEventListener('input' , valEmRegex)
function valEmRegex(){

   
    if(valEmReg.test(inEmailReg.value)){

        inEmailReg.classList.add('is-valid')
        inEmailReg.classList.remove('is-invalid')
        return true
       
      }else{
        inEmailReg.classList.add('is-invalid')
        return false
      }



}

inPassReg.addEventListener('input' , valPassRegex)
function valPassRegex(){

   
    if(valPassReg.test(inPassReg.value)){

        inPassReg.classList.add('is-valid')
        inPassReg.classList.remove('is-invalid')
        return true
       
      }else{
        inPassReg.classList.add('is-invalid')
        return false
      }



}

