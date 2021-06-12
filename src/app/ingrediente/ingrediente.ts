export class Ingrediente{
    static maxid : number = 3
    id : string
    nome: string
    regra_conversao: number
    img: string
    constructor(id : string, nome:string, regra_conversao:number, img : string){
        this.id = id
        this.nome = nome
        this.regra_conversao = regra_conversao
        this.img = img
    }
}