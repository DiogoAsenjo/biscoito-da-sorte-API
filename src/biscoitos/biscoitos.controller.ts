import { Controller, Get } from '@nestjs/common';
import { BiscoitosService } from './biscoitos.service';

@Controller('biscoitos')
export class BiscoitosController {
    constructor(private readonly biscoito: BiscoitosService) {}

    @Get('positivos')
    imprimeMensagem():string {
        return this.biscoito.pegarBiscoitoDoBem();
    }

    @Get('negativos')
    imprimeMensage():string {
        return this.biscoito.pegarBiscoitoDoMal();
    }
}

