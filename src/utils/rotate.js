export function calculateNext(deg, mod, isRight){
    if(isRight) return deg + mod
    return deg - mod
}