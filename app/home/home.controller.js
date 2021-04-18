(function () {
  'use strict';

  angular.module('todoApp')
    .controller('homeController', homeController);

  homeController.$inject = [];

  function homeController() {
    var vm = this;

    /* ***************    INIT VARIÁVEIS    *********************************** */
    vm.unidade = null;
    vm.horario = null;
    vm.alerta = false;
    vm.nome = "";
    vm.email = "";
    vm.telefone = "";

    /* ***************    INDICE FUNÇÕES    **************** */
    vm.init = init;
    vm.agendarTestDrive = agendarTestDrive;
    

    /* ***************    FUNÇÕES    ******************************** */

    function init() {
      vm.listaHorarios = [
        {hora:"09:00"},
        {hora:"11:00"},
        {hora:"14:00"},
        {hora:"15:00"},
        {hora:"16:00"}
      ];
      vm.listaUnidades = [
        {local:"Brasilia"},
        {local:"São Paulo"},
        {local:"Rio de Janeiro"},
        {local:"Santa Catarina"},
        {local:"Minas Gerais"}
      ];
      vm.listaImagens1 = [];
      vm.listaImagens1[0] = '/imagens/civicTumb4.jpg';
      vm.listaImagens1[1] = '/imagens/civicTumb5.jpg';
      vm.listaImagens1[2] = '/imagens/civicTumb6.jpg';
    }
    
    function agendarTestDrive(){
      if(!verificarCampos()){
        abrirModalDescricao();
        vm.unidadeModal =  vm.unidade;
        vm.horarioModal = vm.horario;
        vm.nomeModal = vm.nome;
        vm.emailModal = vm.email;
        vm.telefoneModal = vm.telefone;
        vm.unidade = null;
        vm.horario = null;
        vm.nome = "";
        vm.email = "";
        vm.telefone = "";
      }
      
    }

    function verificarCampos(){
      var temErro = false;
      if(vm.nome.length < 5){
        vm.error = "Digite seu Nome Completo!";
        temErro = true;
      }else if(vm.email.length < 5){
        vm.error = "Digite seu Email!";
        temErro = true;
      }else if(vm.telefone.length < 5){
        vm.error = "Digite seu Telefone!";
        temErro = true;
      }else if(vm.horario === null){
        vm.error = "Escolha um horário para o test drive!";
        temErro = true;
      }else if(vm.unidade === null){
        vm.error = "Escolha uma unidade para o test drive!";
        temErro = true;
      }

      return temErro;
    }

    function abrirModalDescricao() {
      $('#modalDescricao').modal('show');
    }
 
  }

})();