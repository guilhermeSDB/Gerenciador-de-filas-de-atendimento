
        // Feito por Guilherme S Barros

        var prioritario = [];
        var comum = [];
        var rapido = [];
        let senhaCliente;
        
        //Função para contar os clickes        
        clicks = 0;
        function click(){
            clicks += 1; 
        }

        function senhaClientes() {
            document.getElementById("senha-clientes").innerHTML = senhaCliente;
        }

        //Funções para adicionar uma senha aos Arrays 
        function addComum(){
            click() // Chama a função click
            senhaCliente = "C-"+clicks; // Adiciona o tipo da senha + o Click numa variavel
            comum.push("C-"+clicks); // Adiciona o tipo da senha + o click no Array
            senhaClientes();// Exibe a senha do Cliente no painel
        }

        function addRapido(){
            click()
            senhaCliente = "R-"+clicks;
            rapido.push("R-"+clicks);
            senhaClientes();
        }

        function addPrioritario(){
            click()
            senhaCliente = "P-"+clicks;
            prioritario.push("P-"+clicks);
            senhaClientes();
        }
         //Fim das funções


         
        //Função para chamar as senhas Rapidas, com verificação.   
        function chamarRapido(){
            if(rapido.length > 0){
                document.getElementById("visor-tela").innerHTML = rapido[0]; 
                rapido.shift();
                document.getElementById("numero-caixa").innerHTML = event.target.id;
            }else{
                chamarPrioritario()
            }
            
            
        }    
        
        //Função para chamar as senhas Prioritarias, com verificação.        
        function chamarPrioritario(){            
            if(prioritario.length > 0){
                document.getElementById("visor-tela").innerHTML = prioritario[0]; 
                prioritario.shift();
                document.getElementById("numero-caixa").innerHTML = event.target.id;  
            }else if(rapido.length > 0){
                chamarRapido();
            }else if (comum.length > 0){
                chamarComum();
            }else{
                document.getElementById("visor-tela").innerHTML = "Nao ha Senhas";
            }
            
        }

        //Função para chamar as senhas Comums, com verificação.  
        function chamarComum(){  
            if(comum.length >0){
                document.getElementById("visor-tela").innerHTML = comum[0]; 
                comum.shift();
                document.getElementById("numero-caixa").innerHTML = event.target.id;
            }else{
                chamarPrioritario()
            } 
            
        }
        //Fim das funções

        // Pega todos os botoes que existem com a class botoes
        const checkButtons = document.querySelectorAll(".botoes")

        checkButtons.forEach( button => {
            //adicionar a escuta
            button.addEventListener("click" , handleClick)

        })        

        //Quando o botao for clickado, registra o evento e entra no IF          
        function handleClick(event){
            // console.log(event)
            event.preventDefault()
            if(event.target.id == "btn-comum" ){
                addComum()
            }else if(event.target.id == "btn-rapido"){
                addRapido()
            }else if(event.target.id == "btn-prioridade"){
                addPrioritario()
            }else if(event.target.id == "Caixa 1"){
                chamarPrioritario()
            }else if(event.target.id == "Caixa 2"){
                chamarRapido()
            }else if(event.target.id == "Caixa 3"){
                chamarRapido()            
            }else if(event.target.id == "Caixa 4"){
                chamarComum()
            }
        }        
 