function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro) {
          reject('Ocorreu um erro!')
    }else{
      resolve(valor)
    }
  })
}

funcionarOuNao('Testando...', 0.1)
                .then(v => console.log(`valor: ${v}`))
                .then(v => consol.log(v),
                  err => console.log(`Erro Especifico.: ${err}`)
                  )
                .catch(err => console.log(`Erro: ${err}`))
                //.then(() => console.log('FIM!'))