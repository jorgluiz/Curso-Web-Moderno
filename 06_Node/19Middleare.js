// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

//operador rest  ( ... ) pega todas as funções e junta dentro de um array
const exec = (ctx, ...middleware) => {
    const execPasso = indice => {
        middleware && indice < middleware.length &&
            middleware[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)

}

const ctx = {}
exec(ctx, passo3, passo1, passo2)
console.log(ctx)