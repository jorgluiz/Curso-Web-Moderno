//const [a] = [10]
//console.log(a)

/*                               valor padrão
                                  ,n6 = 0                                          */
const      [n1,/*?*/,n3,/*?*/,n5  ,n6 = 0] = [10, 7, 9, 8]
console.log(n1,      n3,      n5,  n6)

//esse exemplo não se usa no dia a dia
//    [ , ignore primeiro elemento [, nota]]  
//    [, [9, nota]]
//    [, [9,segundo(6)]]
const [, [ , nota]] = [[, 8, 8],   [9, 6, 8]]
                     /*primeiro   //segundo
                       elemento*/ //elemento 6
console.log(nota)


