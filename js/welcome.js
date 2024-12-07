




let users = JSON.parse(localStorage.getItem('person'))




for (let i = 0; i < users.length; i++) {
    

    
if(    users[i].check == true       ){

    users[i].check = false

document.querySelector('#homeh1').innerHTML  = 'Heloo ' + users[i].name


    localStorage.setItem('person' , JSON.stringify(users))

}
    
}












