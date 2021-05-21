export class Ingrediente{
    nome: string
    regra_conversao: number
    img: string
    constructor(nome:string, regra_conversao:number, img : string){
        this.nome = nome
        this.regra_conversao = regra_conversao
        this.img = img
    }
}