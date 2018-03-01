//Acomodacoes
$(document).ready(function(){
        
        var tituloPagina = "Acomodações"
        var foto = ""
        var titulo = ""
        var descricao = ""
        var capacidade = ""

        
    
        $("#suiteSol").click(function(){
            tituloPagina = "Acomodações";   
            foto = "1.JPG"
            titulo = "Suíte Sol"
            descricao = "Quartos simples e aconchegantes para adultos"
            capacidade = "2 adultos"   

              loadQuartos(foto, titulo, descricao, capacidade, tituloPagina);        
            
        });
    
        //suiteMar  3.JPG
        $("#suiteMar").click(function(){
            tituloPagina = "Acomodações"; 
            foto = "3.JPG"
            titulo = "Suíte Mar"
            descricao = "Quartos luxuosos virádos de frente para o mar vão lhe proporcionar memórias inesquecíveis"
            capacidade = "2 adultos"   

              loadQuartos(foto, titulo, descricao, capacidade, tituloPagina);    
            
            });
        
        //suiteFarol 2.JPG
        $("#suiteFarol").click(function(){
            tituloPagina = "Acomodações"; 
            foto = "2.JPG"
            titulo = "Suíte Farol"
            descricao = "Quarto amplo com cama plus size macia para disfrutar com muito conforto de sua viagem"
            capacidade = "2 adultos"   

              loadQuartos(foto, titulo, descricao, capacidade, tituloPagina);   
            
        });
        

        //suiteSingle  
        $("#suitelarge").click(function(){
            tituloPagina = "Acomodações"; 
            foto = "suite_large.jpg"
            titulo = "Suíte Large"
            descricao = "Quarto amplo ideal para quem vem em família ou amigos"
            capacidade = "3 adultos, ou 2 adultos + 1 crianças"   

            loadQuartos(foto, titulo, descricao, capacidade, tituloPagina);   
    
        });


        //suiteLarge  
        $("#suiteExtraLarge").click(function(){
            tituloPagina = "Acomodações"; 
            foto = "suite_extra_large.jpg"
            titulo = "Suíte Extra Large"
            descricao = "Quarto amplo ideal para quem vem em família ou amigos"
            capacidade = "4 adultos, ou 2 adultos + 2 crianças"   

            loadQuartos(foto, titulo, descricao, capacidade, tituloPagina);  
             
        });

    
        //suiteMaster  suite_master.JPG
        $("#suiteMaster").click(function(){
            tituloPagina = "Acomodações"; 
            foto = "suite_master.jpg"
            titulo = "Suíte Master"
            descricao = "Uma suíte luxuosa para casais que querem desfrutar de momentos inesquecíveis"
            capacidade = "2 adultos"   

            loadQuartos(foto, titulo, descricao, capacidade, tituloPagina);  
            
        });

    
    
        //Carregamento conteudo internob
        function loadQuartos(foto, titulo, descricao, capacidade, tituloPagina){
                
             $("#painel").show();   
                var meuHtml = '<div id="acomodacoes-geral"><div id="acomodacoes-foto"><img width="700px" src=img/'+ foto +' ></div><div id="acomodacoes-textos"> <h4>'+ titulo +'</h4> <h5>Descrição</h5><p>'+ descricao +'</p><h5>Ideal para</h5><p>'+ capacidade +'</p></div></div> '
                
                console.log(foto);
                console.log(titulo);
                console.log(descricao);
                console.log(capacidade);
            
            $("#painel > div:nth-child(1)").html(tituloPagina); 
            $(".conteudoInterno").html(meuHtml);
            $("#conteudoInternoMobile").css("background-color", "white");

        };             
                      
        
        //Carregamento conteudo interno - Home
       $("#menu_home").click(function(){
           tituloPagina = "Pagina inicial";
           meuHtml = "Seja Bem vindo a pousada mar aberto"
           
               $("#painel").show();
               $("#painel > div:nth-child(1)").html(tituloPagina); 
               $(".conteudoInterno").html(meuHtml);
               $("#conteudoInternoMobile").css("background-color", "white");
            
            });
    
        //Carregamento conteudo interno - Sobre nós
       $("#sobrenos").click(function(){
           tituloPagina = "Sobre nós";
           meuHtml = '<p>Somos uma pousada localizada no guarujá com 35 anos de tradição.</p>'
           
               $("#painel").show();
               $("#painel > div:nth-child(1)").html(tituloPagina); 
               $(".conteudoInterno").html(meuHtml);
               $("#conteudoInternoMobile").css("background-color", "white");
            
            });
    
        //Carregamento conteudo interno
        $("#promocoes").click(function(){
           tituloPagina = "Promoções";

           
               $("#painel").show();
               $("#painel > div:nth-child(1)").html(tituloPagina); 
               $(".conteudoInterno").load("tabela.html"); $("#conteudoInternoMobile").css("background-color: white;");
            
            });
        //Carregamento conteudo interno
       $("#como_chegar").click(function(){
           tituloPagina = "Como chegar";
           meuHtml = "tabela.html";
           
               $("#painel").show();
               $("#painel > div:nth-child(1)").html(tituloPagina); 
               $("#conteudoInternoMobile").css("background-color", "white");
                
           console.log(meuHtml);
            
            });
                 
                      
  }) ;   




