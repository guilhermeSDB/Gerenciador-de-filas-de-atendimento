        var botaoClickado
        var prioritario = [];
        var comum =[];
        var rapido = [];
        var senhaCliente;        
        
        clicks = 0;
        function click(){
            clicks += 1; 
        }

        //Função para adicionar uma senha comum ao Array Comum[]
        function addComum(){
            click()
            senhaCliente = "C"+clicks;
            comum.push("C"+clicks);
            document.getElementById("senha-clientes").innerHTML = senhaCliente;
        }

        function addRapido(){
            click()
            senhaCliente = "R"+clicks;
            rapido.push("R"+clicks);
            document.getElementById("senha-clientes").innerHTML = senhaCliente;
        }
        
        //Declarando 
        const botaoComum = document.querySelector("btn-comum")
        const botaoRapido = document.querySelector("btn-rapido")
        const botaoPrioridade = document.querySelector("btn-prioridade")

        // Pegar todos os botoes que existem com a class botoes
        const checkButtons = document.querySelectorAll(".botoes")

        checkButtons.forEach( button => {
            //adicionar a escuta
            button.addEventListener("click" , handleClick)
        })        
          
        function handleClick(event){
            event.preventDefault()
            if(botoes == "btn-comum"){
                addComum()
            }else{
                addRapido()
            }   
        }        


        function add (clicked_id) {
            var botaoClickado = clicked_id;
            clicks += 1;   

            if(botaoClickado == "btn-comum"){
                senhaCliente = "C"+clicks;
                comum.push("C"+clicks);
                document.getElementById("senha-clientes").innerHTML = senhaCliente;
            }else if (botaoClickado == "btn-rapido"){
                senhaCliente = "R"+clicks;
                rapido.push("R"+clicks);
                document.getElementById("senha-clientes").innerHTML = senhaCliente;
            }else if (botaoClickado == "btn-prioridade"){
                senhaCliente = "P"+clicks;
                prioritario.push("P"+clicks);
                document.getElementById("senha-clientes").innerHTML = senhaCliente;
            }
            
            
        }

        function chamarRapido(){
            var senhaChamada = rapido[0];
            document.getElementById("visor-tela").innerHTML = rapido[0]; 
            rapido.shift();
        }       
        
        function chamarPrioritario(){
            var senhaChamada = prioritario[0];
            document.getElementById("visor-tela").innerHTML = prioritario[0]; 
            prioritario.shift();
        }
        
        
        function chamar(clicked_id) {  
            var botaoClickado = clicked_id;
            if(botaoClickado == "caixa1"){
                if(prioritario.length > 0){
                    chamarPrioritario()
                    document.getElementById("numero-caixa").innerHTML = "Caixa 1";
                }else if (rapido.length > 0){
                    chamarRapido()
                    document.getElementById("numero-caixa").innerHTML = "Caixa 1";
                }else if (comum.length > 0){
                    var senhaChamada = comum[0];
                    document.getElementById("visor-tela").innerHTML = comum[0]; 
                    comum.shift();
                    document.getElementById("numero-caixa").innerHTML = "Caixa 1";
                }else{
                    document.getElementById("visor-tela").innerHTML = "Nao ha senhas";
                }
                
            }else if(botaoClickado == "caixa2"){
                chamarRapido()
                document.getElementById("numero-caixa").innerHTML = "Caixa 2";
            }else if(botaoClickado == "caixa3"){
                chamarRapido()
                document.getElementById("numero-caixa").innerHTML = "Caixa 3";
            }else if(botaoClickado == "caixa4"){
                var senhaChamada = comum[0];
                document.getElementById("visor-tela").innerHTML = comum[0]; 
                comum.shift();
                document.getElementById("numero-caixa").innerHTML = "Caixa 4";
            }    
        }