console.log("checking connection")


const closeForm = document.querySelector('#close-form')



const collapse = (event) => {
    console.log("you're on the right spot")
      if(closeForm.innerText === 'X'){
        closeForm.innerText = '+'
      } else { 
        closeForm.innerText = 'X'
      }
    }






closeForm.addEventListener('click', collapse)









  