# Feedbacks

## Requisito 1

### Readme
- Remover para criar as pastas components dentro de src, pois ja vem criada no projeto

## Requisito 3

### Exiba a imagem usando a tag HTML img, com o atributo src que tenha o valor da prop cardImage e o atributo alt com o valor da prop cardName. Essa imagem também deve ter o atributo data-testid="image-card"

Algo importante a ressaltar algo de fundamentos que temos a possibilidade de utilizar no react seria a utilização de template strings em atributos, ou até textos normais, por exemplo o alt ao inves de somente o nome da carta seria reforçar conceitos sobre acessibilidade descrevendo melhor o que seria exatamente o item 
```js
<img src={ cardImage } alt={ `Imagem da carta ${cardName}` } />
```

Acredito que mesmo sendo um exemplo simples, são coisas úteis que podem sempre reforçar alguns conceitos até mesmo porque isso pode ser utilizada em outras abordagens além do atributo alt, como até no mesmo quando há algo só como texto do elemento.
