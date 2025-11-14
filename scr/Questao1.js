function formatarProdutos(produtosJSON) {
  
  const dados = JSON.parse(produtosJSON);

  const listaFormatada = [];

  dados.itens.forEach(item => {
    const nome = item.nome;
    const preco = item.preco.toFixed(2);
    const categoria = item.categoria;

    const texto = `${nome} - R$ ${preco} (Categoria: ${categoria})`;
    listaFormatada.push(texto);
  });

  return listaFormatada;
}

// --- Teste ---
const produtosJSON = `{
 "itens": [
   {
     "id": 1,
     "nome": "Notebook Gamer",
     "preco": 2999.99,
     "categoria": "eletronicos",
     "tags": ["tecnologia", "computacao", "gamer"]
   },
   {
     "id": 2, 
     "nome": "Mesa Escritório",
     "preco": 450.50,
     "categoria": "moveis",
     "tags": ["escritorio", "madeira", "profissional"]
   }
 ]
}`;

console.log(formatarProdutos(produtosJSON));
