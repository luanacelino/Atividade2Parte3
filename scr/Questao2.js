function analisarTexto(texto) {
 
  const palavras = texto
    .replace(/[.,!?;:]/g, "")    
    .split(/\s+/)                  
    .filter(p => p.length > 0);    

  const totalPalavras = palavras.length;

 
  const mapa = {};
  for (const palavra of palavras) {
    mapa[palavra] = (mapa[palavra] || 0) + 1;
  }

  const frequenciaPalavras = Object.entries(mapa).map(([palavra, frequencia]) => ({
    palavra,
    frequencia
  }));

  const somaTamanhos = palavras.reduce((acc, p) => acc + p.length, 0);
  const tamanhoMedioPalavras = somaTamanhos / totalPalavras;

  return {
    totalPalavras,
    frequenciaPalavras,
    tamanhoMedioPalavras: Number(tamanhoMedioPalavras.toFixed(1))
  };
}

const texto = "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";

console.log(analisarTexto(texto));

