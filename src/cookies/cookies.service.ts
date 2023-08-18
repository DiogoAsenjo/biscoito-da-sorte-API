import { Injectable, NotFoundException } from '@nestjs/common';
import { Cookies } from './cookie.entity';
import { Sequelize } from 'sequelize';

@Injectable()
export class CookiesService {

    async cookieAleatorio(): Promise<string> {
        const cookies = await Cookies.findAll();
        const frasesCookies = cookies.map((item) => item.frase);
        const mensagem = frasesCookies[Math.floor(Math.random() * frasesCookies.length)];
        return mensagem;
    }

    //Melhorar o tratamento de erros.
    async atualizarCookie(id: number, novoCookie: string): Promise<any> {
        const cookieExiste = await Cookies.findByPk(id);
        if(!cookieExiste) {
            throw new Error ('Cookie não encontrado!')
            //throw new NotFoundException('Cookie não encontrado!');
        } else {
            cookieExiste.frase = novoCookie;
            await cookieExiste.save();
        }
    }

    async excluirCookie(id: number): Promise<any> {
        const cookieExiste = await Cookies.findByPk(id);
        if(!cookieExiste) {
            throw new Error ('Cookie não encontrado!')
        } else {
            await cookieExiste.destroy();
            
        } 
    }
}