function JSON() {
    var usuario = {
        nome: document.getElementById('nome').value,
        senha: document.getElementById('senha').value,
        email: document.getElementById('email').value
    };
    console.log(usuario)
    var usuarioJSON = JSON.stringify(usuario)
    console.log(usuarioJSON)
    localStorage.setItem("testJSON", usuarioJSON);

}

function pegarJSON(){
    let text = localStorage.getItem("testJSON");
    let obj = JSON.parse(text);
    console.log(obj)
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