import { Injectable } from '@nestjs/common';

const frasesNegativas: Array<string> = [
    "O sucesso é para os outros, não para você.",
    "Não importa o quanto você tente, nunca será bom o suficiente.",
    "A vida é uma sequência de decepções.",
    "Nada que você faz realmente importa no final das contas.",
    "Você está destinado a falhar, então por que se esforçar?",
    "Ninguém se importa com o que você pensa ou faz.",
    "Cada novo dia traz mais tristeza do que o anterior.",
    "Seus sonhos são inalcançáveis, é melhor desistir agora.",
    "A esperança é uma ilusão que só leva à desilusão.",
    "A vida é uma série interminável de monotonias e aborrecimentos."
  ];

@Injectable()
export class BiscoitosNegativosService {

    pegarBiscoitoDoMal(): string {
        const mensagem = frasesNegativas[Math.floor(Math.random() * frasesNegativas.length)];
        return mensagem;
    }

    listarNegativos(): Array<string> {
        const listaNegativa: Array<string> = []
        frasesNegativas.forEach((frase, index) => {
            listaNegativa.push(`${index} - ${frase}`)
        })  
        return listaNegativa;
    }

    adicionarMensagemDoMal(mensagem: string): void {
        frasesNegativas.push(mensagem);
    }

    deletarFraseDoMal(indice: number) : void {
        frasesNegativas.splice(indice, 1);
    }
}
