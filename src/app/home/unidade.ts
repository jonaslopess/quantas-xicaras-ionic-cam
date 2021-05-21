export class Unidade {
    id : number
    descricao : string
    mililitros: number
    
    constructor(id: number, descricao : string, mililitros: number){
        this.id = id
        this.descricao = descricao
        this.mililitros = mililitros
    }

    converter(
        unidade_entrada:Unidade,
        quantidade_entrada:number,
        regra_conversao: number
    ):string{

        let resultado:number = 0;

        if(unidade_entrada.mililitros < 0)
            resultado = quantidade_entrada * (1/regra_conversao);
            //converte de g para ml
        else
            resultado = quantidade_entrada*unidade_entrada.mililitros;
            //quantidade total em ml
        
        if(this.mililitros < 0)
            resultado *= regra_conversao; //coverte de ml para g
        else
            resultado /= this.mililitros; 
            // divide a quantidade total na unidade correspondente

        return this.formatar(resultado);
    }

    formatar(resultado: number):string{
        let formatado:string = '';
        if(this.mililitros > 1){
            let resto:number = resultado % 1;
            if(resto == 0 || resto > 0.75){
                return `${Math.round(resultado)} ${this.descricao}`;
            }
            resultado -= resto;
            if(resto <= 0.25){
                formatado = '1/4';
            } else if(resto <= 0.3334){
                formatado = '1/3';
            } else if(resto <= 0.5){
                formatado = '1/2';
            } else if(resto <= 0.6667){
                formatado = '2/3';
            } else if(resto <= 0.75){
                formatado = '3/4';
            }
            if(resultado > 0)
                return `${resultado} ${formatado} ${this.descricao}`;
            else   
                return `${formatado} ${this.descricao}`;
        } else {
            return `${resultado} ${this.descricao}`;
        }
        
    }
}