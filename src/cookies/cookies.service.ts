import { Injectable, NotFoundException } from '@nestjs/common';
import { Cookies } from './cookie.entity';
import { Sequelize } from 'sequelize';
//Tirar imports que não foram utilizados;

@Injectable()
export class CookiesService {

    async cookieAleatorio(): Promise<string> {
        const cookies = await Cookies.findAll();
        const frasesCookies = cookies.map((item) => item.frase);
        const mensagem = frasesCookies[Math.floor(Math.random() * frasesCookies.length)]; //Falar com o Pedro para melhorar esse aleatório.
        return mensagem;
    }

    //Melhorar o tratamento de erros.
    async atualizarCookie(id: number, novoCookie: string): Promise<any> { //Tirar esse any;
        const cookieExiste = await Cookies.findByPk(id);
        if(!cookieExiste) {
            throw new Error ('Cookie não encontrado!')
            //throw new NotFoundException('Cookie não encontrado!');
        } else {
            cookieExiste.frase = novoCookie;
            await cookieExiste.save();
        }
    }

    async excluirCookie(id: number): Promise<any> { //Tirar o any;
        const cookieExiste = await Cookies.findByPk(id);
        if(!cookieExiste) {
            throw new Error ('Cookie não encontrado!')
        } else { //Tirar esse else
            await cookieExiste.destroy();
            //Apesar dele deletar a linha do id, quando eu crio um novo ele parte do item que foi excluído. Exemplo, eu dou destroy() no cookie do id 7, quando eu for criar um novo, o id dele será 8. 
        } 
    }
}