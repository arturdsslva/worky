-> MIGRATIONS
❯ npm run typeorm migration:create src/data/migrations/CreateUser
❯ npm run typeorm -- -d ./src/data/datasources/ormconfig.ts migration:run

-> FLUXO DE CRIACAO

- src/data/models: INTERFACE PARA REPRESENTAR OS DADOS
- src/domain/entities: ENTIDADADE PARA A CAMADA DE DOMAIN, USADA APENAS PARA AS REGRAS DE NEGOCIO
- src/data/entities: ENTIDADE RESPONSAVEL POR REPRESENTAR OS DADOS NO BANCO, SEM CONTATO COM A CAMADA DOMAIN
- src/domain/repositories: INTERFACE DO REPO PARA MANTER DESACOPLADO
- src/data/repositories: IMPLEMENTACAO DO REPOSITORIO
