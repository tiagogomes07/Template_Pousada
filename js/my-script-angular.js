var app = angular.module('app', []);

    app.controller("reservascontroller", function($scope, $http){

        //objeto Json
        $scope.Reserva = {
            DataIni: "",
            DataFim: "",
            NumHospede: "",
        },

            $scope.valorEstadia;

        //funcao
        $scope.addlcto = function(){
           var reserva = JSON.stringify($scope.Reserva);  
            
           $scope.Reserva;
                      
           $http.post("/Orcamento/Calcular", reserva).success(function (response) {
           }).error(function (error) {
                  
               }).then(function (data) {
                   validar(data)
               });        
        }

        function validar(data) {

            if (typeof (data.data) == "number")
            {
                $("#myModal").modal('show');
                $scope.valorEstadia = data.data;      
            }
            else
            {
                alert(data.data)
            }                            
        }

    })

    
    
    app.controller("promocoes", function($http)
    {
            
    })
    
    


