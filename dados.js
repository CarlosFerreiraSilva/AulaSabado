function jason() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
  
    // Checar se algum campo está vazio
    if (nome === "" || senha === "" || email === "") {
      alert("Por favor, preencha todos os campos.");
      return; // Não prosseguir com a adição se algum campo estiver vazio
    }
  
    var usuario = {
      nome: nome,
      senha: senha,
      email: email,
    };
  
    console.log(nome);
  
    var usuarios = JSON.parse(localStorage.getItem("usuariosJSON")) || [];
  
    console.log(usuarios);
  
    usuarios.push(usuario);
  
    localStorage.setItem("usuariosJSON", JSON.stringify(usuarios));
    alert("Obrigado por Cadastrar.");
  }

function pegarJason() {
  let text = localStorage.getItem("usuariosJSON");
  let obj = JSON.parse(text);
  console.log(obj);

  var usuarios = JSON.parse(localStorage.getItem("usuariosJSON")) || [];
  var modalBody = document.getElementById("modal-body");
  console.log(modalBody);
  modalBody.innerHTML = ""; // Limpar o conteúdo anterior

  // usuarios.forEach(function(usuario) {
  //     var p = document.createElement('p');
  //     p.textContent = `Nome: ${usuario.nome}, Senha: ${usuario.senha}, Email: ${usuario.email}`;
  //     modalBody.appendChild(p);
  // });

  if (usuarios.length > 0) {
    var table = document.createElement("table");
    table.className = "table";

    var thead = document.createElement("thead");
    var trHead = document.createElement("tr");
    trHead.innerHTML = `
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Senha</th>
            <th scope="col">Email</th>
            <th scope="col">Ações</th>
        `;
    thead.appendChild(trHead);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");
    usuarios.forEach(function (usuario, index) {
      var tr = document.createElement("tr");
      tr.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${usuario.nome}</td>
                <td>${usuario.senha}</td>
                <td>${usuario.email}</td>
                <td><button class="btn btn-danger" onclick="deletarUsuario(${index})">Deletar</button></td>
            `;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    modalBody.appendChild(table);
  } else {
    modalBody.textContent = "Nenhum usuário cadastrado.";
  }
}

function deletarUsuario(index) {
  var usuarios = JSON.parse(localStorage.getItem("usuariosJSON")) || [];
  usuarios.splice(index, 1);
  localStorage.setItem("usuariosJSON", JSON.stringify(usuarios));
  pegarJason(); // Atualizar a lista após a exclusão
}

function LoginDisplay() {
  var Login = document.getElementById("Login");
  Login.style.display = "block";

  var Cadastro = document.getElementById("Cadastro");
  Cadastro.style.display = "none";
}

function CadastroDisplay() {
  var Login = document.getElementById("Login");
  Login.style.display = "none";

  var Cadastro = document.getElementById("Cadastro");
  Cadastro.style.display = "block";
}

function login() {
  var nome = document.getElementById("nome").value;
  var senha = document.getElementById("senha").value;
  var usuarios = JSON.parse(localStorage.getItem("usuariosJSON")) || [];

  var usuarioEncontrado = usuarios.find(function (usuario) {
    return usuario.nome === nome && usuario.senha === senha;
  });

  if (
    usuarioEncontrado ||
    document.getElementById("nome").value == "" ||
    document.getElementById("senha").value
  ) {
    alert("Login feito");
  } else {
    alert("Usuário ou senha incorretos");
  }
}

// function JSON() {
//     const teste = { nome: 'João', idade: 30 };
//     try {
//       const json = JSON.stringify({ nome: 'João', idade: 30 });
//       console.log('JSON.stringify funciona:', json);
//     } catch (error) {
//       console.error('Erro:', error);
//     }
//   }
