// JavaScript Document
function checaCampos() {

    var campos = []; // declaração do vetor que guarda os valores dos campos
    var vazio = 0;
    campos[0] = document.forms.cadastro.fnome.value; // captura o valor do campo do nome
    if (campos[0] !== "") {
        vazio += 1;
    }
    campos[1] = document.forms.cadastro.fsobreNome.value; // captura o valor do campo do sobrenome
    if (campos[1] !== "") {
        vazio += 1;
    }
    campos[2] = document.forms.cadastro.fdataNasc.value; // captura o valor do campo de data
    if (campos[2] !== "") {
        vazio += 1;
    }
    campos[3] = document.forms.cadastro.frg.value; // captura o valor do campo de RG
    if (campos[3] !== "") {
        vazio += 1;
    }
    campos[4] = document.forms.cadastro.fcpf.value; // captura o valor do campo de CPF
    if (campos[4] !== "") {
        vazio += 1;
    }
    campos[5] = document.forms.cadastro.fct.value; // captura o valor do campo de Carteira de Trabalho
    campos[6] = document.forms.cadastro.festadoCivil.value; // captura o valor do campo de Estado Civil
    campos[7] = document.forms.cadastro.ftipoAcesso.value; // captura o valor do campo de Tipo de Acesso
    campos[8] = document.forms.cadastro.fcelular.value; // captura o valor do campo do Celular
    campos[9] = document.forms.cadastro.fflogradouro.value; // captura o valor do campo do Logradouro
    campos[10] = document.forms.cadastro.fcomplemento.value; // captura o valor do campo do Complemento
    campos[11] = document.forms.cadastro.fnumero.value; // captura o valor do campo do Número
    campos[12] = document.forms.cadastro.fcidade.value; // captura o valor do campo do Cidade
    campos[13] = document.forms.cadastro.fuf.value; // captura o valor do campo do Estado
    campos[14] = document.forms.cadastro.fcep.value; // captura o valor do campo do CEP
    campos[15] = document.forms.cadastro.fmatricula.value; // captura o valor do campo do Matricula

    if (vazio !== 0) {
        return alert("Cadastrado com Sucesso!");
    } else {
        return alert("Preencha todos os campos obrigatórios!");
    }
}
