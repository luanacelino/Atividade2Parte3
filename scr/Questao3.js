function normalizarUsuarios(json) {
  const usuarios = JSON.parse(json);

  const capitalizarNome = (nome) => {
    return nome
      .trim()                       
      .toLowerCase()               
      .split(/\s+/)                 
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return usuarios.map(user => {
    const nomeNormalizado = capitalizarNome(user.nome);
    const emailNormalizado = user.email.toLowerCase();
    const idadeNumero = Number(user.idade);
    const maiorDeIdade = idadeNumero >= 18;

    return {
      nome: nomeNormalizado,
      email: emailNormalizado,
      emailValido: validarEmail(emailNormalizado),
      idade: idadeNumero,
      maiorDeIdade
    };
  });
}

const usuariosJSON = `[
 {"nome": " carlos silva ", "email": "CARLOS@EMAIL.COM", "idade": "25"},
 {"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
 {"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;

console.log(normalizarUsuarios(usuariosJSON));
