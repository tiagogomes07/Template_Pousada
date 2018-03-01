var app = angular.module('app', []);

    app.controller("reservascontroller", function($scope, $http){

        //objeto Json
        $scope.Reserva = { 
                strDataIni:"", 
                strDataFim:"",
                strPessoas:"",
            },

        $scope.testeSplit;

        //funcao
        $scope.addlcto = function(){

            var Entrada = $scope.strDataIni;
            var frmEntrada;
            frmEntrada = Entrada.getDate() ;
            frmEntrada += "/"
            frmEntrada += Entrada.getMonth() +1 ;
            frmEntrada += "/"
            frmEntrada += Entrada.getFullYear();

            var Saida = $scope.strDataFim;
            var frmSaida;
            frmSaida = Saida.getDate() ;
            frmSaida += "/"
            frmSaida += Saida.getMonth() +1 ;
            frmSaida += "/"
            frmSaida += Saida.getFullYear();

            console.log(frmEntrada)
            console.log(frmSaida)

            var frmPessoas = $scope.Reserva.strPessoas;
            console.log(frmPessoas)
            
            
            $scope.Reserva.strDataIni = frmEntrada;
            $scope.Reserva.strDataFim = frmSaida;
            console.log($scope.Reserva)
            
            
            var req = {
             method: 'POST',
             url: 'http://localhost:50652/api/Orcamento',
             headers: {
               'Content-Type': "application/json"
             },
             data: $scope.Reserva
            }

            $http(req).then(function(objeto){
                    
                    var Resposta =  objeto.data.Result
                    
                    console.log(Resposta);
                
                    alert(Resposta);
                
            });
        
    };})
    
    
        app.controller("promocoes", function($scope, $http)
       {           
            $scope.carregarPromocoes = function()
                {
                
                   $scope.testes =[ 
                       {                       
                       nome:"tiago",
                       identificao:"1"
                       },
                       {                       
                       nome:"gomes",
                       identificao:"2"
                       },
                    ]
                   console.log("carregar promocoes")
                   
                   
                    var req = {
                         method: 'GET',
                         url: 'http://localhost:50652/api/promocao',
                         headers: 
                             {
                             'Content-Type': "application/json"
                            },

                                }

                        $http(req).then(function(objeto){

                        $scope.Resposta =  objeto;
                            
                        console.log($scope.Resposta);
                        console.log($scope.Resposta.data);
                        }); 

                };
            
                $scope.carregarPromocoes();
        })
        
         app.controller("promocoesMobile", function($scope, $http)
       {           
            $scope.carregarPromocoes = function()
                {
                
                   $scope.testes =[ 
                       {                       
                       nome:"tiago",
                       identificao:"1"
                       },
                       {                       
                       nome:"gomes",
                       identificao:"2"
                       },
                    ]
                   console.log("carregar promocoes")
                   
                   
                    var req = {
                         method: 'GET',
                         url: 'http://localhost:50652/api/promocao',
                         headers: 
                             {
                             'Content-Type': "application/json"
                            },

                                }

                        $http(req).then(function(objeto){

                        $scope.Resposta =  objeto;
                            
                        console.log($scope.Resposta);
                        console.log($scope.Resposta.data);
                        }); 

                };
            
                $scope.carregarPromocoes();
        })
    
    

    

