setTimeout(function () {
  console.log('Executando callback')

  setTimeout(function () {
    console.log('Executando callback')

    setInterval(function () {
      console.log('Executando callback')
    }, 2000)
  }, 2000)
}, 2000)



function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('executando promise...')
      resolve()
    }, tempo)
  })
}

//esperarPor(3000).then(texto => console.log(texto))

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)