# NLW-SETUP-BACK-END
### REPOSITÓRIO DA EDIÇÃO DO NLW SETUP - BACK-END 
## Tecnologias utilizadas
- Typescript
- Fastify
- Prisma
- Zod 
- DayJS 


## Como rodar
Requer Node.js 22.12+ (recomendado 24 LTS).

```bash
cp .env.example .env
npm install          # também roda `prisma generate`
npx prisma migrate deploy
npx prisma db seed   # opcional: recria dados de exemplo (apaga os existentes)
npm run dev          # http://localhost:3333 (ou PORT=xxxx)
```
