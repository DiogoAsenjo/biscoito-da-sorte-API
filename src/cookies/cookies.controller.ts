import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Cookies } from './cookie.entity';
import { Response } from 'express';

@Controller('cookies')
export class CookiesController {

    @Get()
    paginaInicial(): string {
        return 'Bem-vindo a página inicial!'
    }
    
    @Post('novo-cookie')
    async adicionarCookiePositivo(@Res() res: Response, @Body() body: { mensagem: string }): Promise<void> {
        const frasePositiva= body.mensagem;
        await Cookies.create({frase: frasePositiva});
        res.status(HttpStatus.CREATED).send('Frase adicionada com sucesso!')
    }

}