console.log(document)

document.addEventListener('click', function(e) {
  const elementId = e.target.id
  const element = document.querySelector("#" + elementId)
  // console.log('NODE:', element)
  if (elementId === "app") {
    element.innerHTML = 'Just clicked!'
  }

  if (elementId === "paragraph") {
    element.innerHTML = 'Just clicked!, but this was paragraph'
  }

  if (elementId === "button") {
    element.style.backgroundColor = 'red'
  }
})
