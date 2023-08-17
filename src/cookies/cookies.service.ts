import { Injectable } from '@nestjs/common';
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
}