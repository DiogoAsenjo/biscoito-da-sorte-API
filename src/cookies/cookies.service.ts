import { Injectable} from '@nestjs/common';
import { Cookies } from './cookie.entity';

@Injectable()
export class CookiesService {

    async cookieAleatorio(): Promise<string> {
        const cookies = await Cookies.findAll();
        const frasesCookies = cookies.map((item) => item.frase);
        const min = 0;
        const max = frasesCookies.length - 1;
        const indiceAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
        const mensagem = frasesCookies[indiceAleatorio];
        return mensagem;
    }

    async atualizarCookie(id: number, novoCookie: string): Promise<void> { 
        const cookieExiste = await Cookies.findByPk(id);
        if(!cookieExiste) throw new Error ('Cookie não encontrado!')
            
        cookieExiste.frase = novoCookie;
        await cookieExiste.save();
    }

    async excluirCookie(id: number): Promise<void> {
        const cookieExiste = await Cookies.findByPk(id);
        if(!cookieExiste) throw new Error ('Cookie não encontrado!')
            
        await cookieExiste.destroy();
    }
}