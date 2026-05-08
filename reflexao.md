O codigo ate quebra um ganho mas com passar do tempo e a evolução do cardapio de frutas
ficaria inviavel manter o mesmo pelo simples fato de nao tem um sequencia logica  de adição de frutas 
o emoji que a IA colocou nao teria manutenção gerencia e colocado no codigo o ideal seria ter isso como
gerencia muitos if na pagina etc.



Agora, a interface está totalmente livre dos dados, utilizando props para exibir uma lista dinâmica de objetos isso elimina a redundância podendo adicionar centenas de itens para o cardapio.


Se você mudar um let x = 0 para x = 1, o valor na memória muda, mas o navegador não entende isso;

No app se ficasse em  dentro de cada ItemCardapio, um card não saberia o que o outro fez.

tem um funcao adicionarAoCarrinho que chama o onClick do componente botao;