const changeMeButton = document.querySelector('#changeMe')
const image = document.querySelector('#myImage')

const showMeButton = document.getElementById('showMe')
const hideMeButton = document.getElementById('hideMe')

const orignalImageSource = image.src
let isToggle = false

changeMeButton.addEventListener('click', function () {
  if (isToggle === false) {
    image.src =
      'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    isToggle = true
  } else {
    image.src = orignalImageSource
    isToggle = false
  }
})

function hideMyImage() {
  image.classList.add('displayNone')
  hideMeButton.classList.add('displayNone')

  showMeButton.classList.remove('displayNone')
}

function showMyImage() {
  image.classList.remove('displayNone')
  hideMeButton.classList.remove('displayNone')
  showMeButton.classList.add('displayNone')
}
