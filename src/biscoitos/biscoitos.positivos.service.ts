import { Injectable } from '@nestjs/common';

const frasesPositivas: Array<string> = [
    "A sorte acompanhará todos os seus passos.",
    "Grandes realizações exigem pequenos passos.",
    "O sucesso está a caminho, continue persistindo.",
    "Seu sorriso iluminará o dia de alguém.",
    "Acredite em si mesmo e tudo será possível.",
    "Boas oportunidades estão no horizonte.",
    "A jornada é tão importante quanto o destino.",
    "A generosidade traz grande recompensa.",
    "Sua criatividade resolverá muitos problemas.",
    "O aprendizado é a chave para o crescimento contínuo."
  ];

@Injectable()
export class BiscoitosPositivosService {

    pegarBiscoitoDoBem(): string {
        const mensagem = frasesPositivas[Math.floor(Math.random() * frasesPositivas.length)];
        return mensagem;
    }

    listarPositivos(): Array<string> {
        const listaPositiva: Array<string> = []
        frasesPositivas.forEach((frase, indice) => {
            listaPositiva.push(`${indice} - ${frase}`)
        })  
        return listaPositiva;
    }

    adicionarMensagemDoBem(mensagem: string): void {
        frasesPositivas.push(mensagem);
    }

    deletarFraseDoBem(indice: number): void {
        frasesPositivas.splice(indice, 1);
    }
    
    alterandoFraseDoBem(indice: number, frase: string): void {
        frasesPositivas.splice(indice, 1, frase);
    }
}