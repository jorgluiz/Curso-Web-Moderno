 const tipo = function triangulos(lado1, lado2, lado3){
     
     if(lado1 == lado2 & lado3 == lado2 & lado1 == lado3){
         console.log('Equilátero')
     }else if(lado1 == lado2 & lado3 != lado1 & lado2 != lado3){
         console.log('Isósceles')
     }else if(lado1 != lado2 & lado3 != lado2 & lado3 != lado1){
        console.log('Escaleno')
     }
     
 }

 tipo(3, 3, 3)
 tipo(3, 3, 4)
 tipo(3, 4, 5)










//  const tipo = function(triangulos = [lado1, lado2, lado3]){


//     for(let i in triangulos){
//         if(lado1 == lado2 & lado3 == lado2 & lado1 == lado3){
//          console.log('Equilátero')
//         }
//     }
//  }

 
