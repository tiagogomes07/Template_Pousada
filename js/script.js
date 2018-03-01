
$(document).ready( function(){
        
    //estadoinicial painel
        $("#painel").hide();
        var painelOculto = true;
    
        
    //estadoinicial menu-acomodacoes
        var menuAberto = false;
    
        //ao posiciona o mouse sobre menu acomodacoes
          $("#menu_acomodacoes").mouseover(function(e) {              					
          $("#menu_quartos").slideDown(150);
            menuAberto = true;  
        });
        
        //ao clicar no menu acomodacoes se o meu menuAberto=false, então desce menu, se estiver aberto, então subir esconder menu
          $("#menu_acomodacoes, menu_quartos").click(function(e) {              				              
              if(menuAberto==false){
                  $("#menu_quartos").slideDown(150);
                  menuAberto = true;
                  
                  //codigo para corrigir o menu sobre nós que estava ocultando parte das acomodações
                  $("#menu > ul > li:nth-child(3)").addClass("espacamento_menu")
                  console.log("abrir acomodacoes")
                  
              }
              else{
                  $("#menu_quartos").slideUp(150);
                  menuAberto = false;
                  
                  //codigo para corrigir o menu sobre nós que estava ocultando parte das acomodações --mobile--
                  $("#menu > ul > li:nth-child(3)").removeClass("espacamento_menu")
                  console.log("fechou acomodacoes")
              }  
        });
    
        //ao retirar o mouse sobre acomodacoes, então subir menu
          $("#menu_acomodacoes, menu_quartos").mouseleave(function(e) {              				
          $("#menu_quartos").slideUp(150);
              menuAberto = false;
        });
    
    
    

        
        
    
})























	
    






