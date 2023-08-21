console.log("checking connection")


const closeForm = document.querySelector('#close-form')
const form = document.querySelector('.form')
const submit = document.querySelector('#sign-up')



const collapse = (event) => {
    console.log("you're on the right spot")
      if(closeForm.innerText === 'X'){
        closeForm.innerText = '+'
      } else { 
        closeForm.innerText = 'X'
      }

      form.classList.toggle("hide")
    }

const addName = (event) => {
  console.log("submit a name and email")
  event.preventDefault()
}



closeForm.addEventListener('click', collapse)

submit.addEventListener('click', addName)








  