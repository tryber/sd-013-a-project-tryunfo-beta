# Feedbacks

## Requisito 1

### Readme
- Remover para criar as pastas components dentro de src, pois ja vem criada no projeto
- Ao inves de indicar `inputs` sugiro trocar por `campos` como foi sugerido pois pode ocorrer equivocos.
## Requisito 3

### Exiba a imagem usando a tag HTML img, com o atributo src que tenha o valor da prop cardImage e o atributo alt com o valor da prop cardName. Essa imagem também deve ter o atributo data-testid="image-card"

Algo importante a ressaltar algo de fundamentos que temos a possibilidade de utilizar no react seria a utilização de template strings em atributos, ou até textos normais, por exemplo o alt ao inves de somente o nome da carta seria reforçar conceitos sobre acessibilidade descrevendo melhor o que seria exatamente o item 
```js
<img src={ cardImage } alt={ `Imagem da carta ${cardName}` } />
```

Acredito que mesmo sendo um exemplo simples, são coisas úteis que podem sempre reforçar alguns conceitos até mesmo porque isso pode ser utilizada em outras abordagens além do atributo alt, como até no mesmo quando há algo só como texto do elemento.

## Requisito 9

Algo que tive nesse projeto que percebi pelos testes, quando a chave Card esta com key referente ao index e não algo próprio o teste irá falhar, sugiro ativarem a regra no array para evitar erros de mal interpretação pois mesmo o código estando correto para o filtro, irá acontecer essa falha. 
https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md

```js
// CORRETO POREM FALHA NO TESTE
{cards.map((card, index) => (<Card
          { ...card }
          onDeleteButtonClick={ this.handleDeleteCard }
          key={ index }
        />))}

// CORRETO
{cards.map((card) => (<Card
          { ...card }
          onDeleteButtonClick={ this.handleDeleteCard }
          key={ card.cardName }
        />))}
```

## Sugestão de Mover Texto

DE 

* * *

# Requisitos bônus

## 10. Crie o filtro pelo nome da carta

  Sua aplicação terá três filtros de listagem de cartas: filtro por **nome**, por **raridade** e por **Super Trunfo**. Os filtros **nome** e **raridade** são acumulativos. O filtro **Super Trunfo** funciona de forma independente.

* * *

PARA

# Requisitos bônus

  Sua aplicação terá três filtros de listagem de cartas: filtro por **nome**, por **raridade** e por **Super Trunfo**. Os filtros **nome** e **raridade** são acumulativos. O filtro **Super Trunfo** funciona de forma independente.
## 10. Crie o filtro pelo nome da carta

...

## Requisito 11

Sugestão de teste, em minha aplicação houve um erro de lógica que mesmo assim o teste passava, no qual acredito que seria necessário verificar se a carta superTrunfo aparece quando estão todas listadas, pois o meu estava oculto e somente aparecia com a checkbox e validava de qualquer forma.