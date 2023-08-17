import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Cookies } from './cookie.entity';
import { Response } from 'express';

@Controller('cookies')
export class CookiesController {

    @Get()
    paginaInicial(): string {
        return 'Bem-vindo a página inicial!'
    }
    

    //CREATE
    @Post('novo-cookie')
    async adicionarCookiePositivo(@Res() res: Response, @Body() body: { mensagem: string }): Promise<void> {
        const frasePositiva= body.mensagem;
        await Cookies.create({frase: frasePositiva});
        res.status(HttpStatus.CREATED).send('Frase adicionada com sucesso!')
    }

    //READ
    @Get('mostrar-cookie')
    async mostraMensagem(@Res() res: Response): Promise<void> {
        try {
            const cookies = await Cookies.findAll();
            const frasesCookies = cookies.map((item) => item.frase);
            res.status(HttpStatus.OK).send(frasesCookies);
        } catch(erro) {
            console.log(erro);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(erro);
        }
    }


}