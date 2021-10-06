function revenda(carro){
    switch(carro){
        case 'heatch':
        console.log('Compra efetuada com sucesso')
        break
        case 'Sedan':
        console.log('Tem certeza que não prefere este modelo?')
        break
        case 'motocicletas':
        console.log('Tem certeza que não prefere este modelo?')
        break
        case 'caminhonetes':
        console.log('Tem certeza que não prefere este modelo?')
        break

        default: console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

revenda('heatch')
revenda('jetski')