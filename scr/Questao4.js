
function sanitizarDados(dados) {
  const copia = JSON.parse(JSON.stringify(dados));

  copia.usuarios = copia.usuarios.map(u => {
    return {
      ...u,
      cpf: u.cpf.replace(/\d(?=\d{2})/g, "*"), 
      cartaoCredito: u.cartaoCredito.replace(/\d(?=\d{4})/g, "*"),
      
      telefone: u.telefone.replace(/(\(\d{2}\)\s)\d{5}(-\d{4})/, (m, ddd, fim) => {
        return `${ddd}*****${fim}`;
      }),

      nome: u.nome
    };
  });

  copia.metadata = {
    ...copia.metadata,
    token: copia.metadata.token.substring(0, 10) + "..." 
  };

  return copia;
}

const dadosSensiveis = {
  usuarios: [
    {
      cpf: "123.456.789-00",
      cartaoCredito: "5555-6666-7777-8888",
      telefone: "(83) 99648-4929",
      nome: "Felix"
    }
  ],
  metadata: {
    ip: "192.168.1.100",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  }
};

console.log(sanitizarDados(dadosSensiveis));
