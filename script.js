
// LOGIN (versão com localStorage)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nomeLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioSalvo && usuarioSalvo.nome === nome && usuarioSalvo.senha === senha) {
      alert("Login bem-sucedido!");
      window.location.href = "agendamento.html";
    } else {
      alert("Nome ou senha inválidos.");
    }
  });
}

// CADASTRO (versão com localStorage)
const cadastroForm = document.getElementById("cadastroForm");
if (cadastroForm) {
  cadastroForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    localStorage.setItem("usuario", JSON.stringify({ nome, senha }));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
  });
}

// AGENDAMENTO (simulado, sem backend)
const agendamentoForm = document.getElementById("agendamentoForm");
if (agendamentoForm) {
  agendamentoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const especialidade = document.getElementById("especialidade").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    const dadosAgendamento = {
      especialidade,
      data,
      hora,
      nome: JSON.parse(localStorage.getItem("usuario"))?.nome || "Não informado",
    };

    localStorage.setItem("agendamento", JSON.stringify(dadosAgendamento));
    window.location.href = "confirmacao.html";
  });
}

// CONFIRMAÇÃO (dados simulados)
if (document.getElementById("nomeConfirmacao")) {
  const agendamento = JSON.parse(localStorage.getItem("agendamento"));

  if (agendamento) {
    document.getElementById("nomeConfirmacao").textContent = agendamento.nome;
    document.getElementById("especialidadeConfirmacao").textContent = agendamento.especialidade;
    document.getElementById("dataConfirmacao").textContent = agendamento.data;
    document.getElementById("horaConfirmacao").textContent = agendamento.hora;
  } else {
    document.getElementById("nomeConfirmacao").textContent = "Erro ao carregar dados.";
  }
}
