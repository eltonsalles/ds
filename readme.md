# DS

Projeto para simular o flame global.

Na pasta `stencil-library` tem um componente em stencil com a configuração para gerar várias saídas da lib.
Na pasta `angular-workspace` tem um wrapper em angular do flame global.

Para gerar as libs é preciso executar `npm run build` do package.json da pasta stencil-library e posteriormente o 
`npm run build` do package.json da pasta angular-workspace.

> Ao executar o build do stencil será gerado arquivos na pasta packages/angular-workspace/projects/component-library/src/lib
> Para a versão com prefixo funcionar foi necessário sobrescrever a saída padrão, então após build da lib em stencil
> é necessário verificar esses arquivos e dar rollback no que foi gerado
