# NLW-SETUP-BACK-END
### REPOSITÓRIO DA EDIÇÃO DO NLW SETUP - BACK-END (SERVER)
## Tecnologias utilizadas
- Typescript
- Fastify
- Prisma
- Zod 
- DayJS 

#### Afunção desta API: <br/>

 - Criar um novo hábito
 - Listar todos os hábitos
 - Listar todos os hábitos que estejam completos (checked)
 - Retornar resumo 
 - Atualizar hábito (checked or unchecked)
 
 ## Endpoints
 ### Criar novo hábito
 
 #### `POST` `/habits`
 Esse endpoint cria um novo hábito.
 
  - Você deverá enviar no corpo da requisição, OBRIGATORIAMENTE:
    - `title` - Título do novo hábito
    - `weekDays` - Dias da semana que o hábito será recorrente
 
 Exemplo da requisição:
 
 ```javascript
 // body
 {
    "title": "Estudar Typescript",
    "weekDays": [0, 1, 2, 3]
 }
 ```
 No exemplo acima o `weekDays` é um array de números em que representam Domingo = 0, Segunda = 1, Terça = 2 e sucessivamente.

Exemplo da resposta:

```javascript
// HTTP Status 200 / 201
// Sem conteúdo no corpo (body) da resposta.
```

### Listar hábitos

#### `GET` `/day?date=2023-02-08T14:00:00.000Z`
Esse endpoint deverá retornar lista de hábitos.

 - Requisição - Query params
  - `date` - Data atual
  
  Atenção: Só serão retornados registros com datas iguais e/ou anteriores à data informada.

- Resposta
 - `possibleHabits` - Array de hábitos possíveis de serem feitos.
 - `completedHabits` - Array de hábitos que foram feitos.

Exemplo de resposta:

```javascript
{
  "possibleHabits": [
 {
	"id": "ef28ebf8-1534-4af3-9bed-5b83de709afd",
	"title": "Exemplo de hábito",
	"created_at": "2023-02-08T03:00:00.000Z"
 }
 ],
  "completedHabits": []
}
```


