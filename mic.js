//- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

 //     1 - Pipoca – 10 segundos (padrão);
 //     2 - Macarrão – 8 segundos (padrão);
 //     3 - Carne – 15 segundos (padrão);
 //     4 - Feijão – 12 segundos (padrão);
 //     5 - Brigadeiro – 8 segundos (padrão); 

//- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
//- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

//Tatiane Maria da Silva - Checkpoint I - Programação Imperativa

function microondas(num,tempo){
    let mensagem = '------ '
    switch(num){
        
        case 1:
            mensagem = 'Pipoca - 10 segundos ';
            if(tempo > 20 && tempo <30){
                mensagem += '- Tempo acima do padrão sua comida queimou!!!\n';  
            } 
            else if (tempo < 10){
                mensagem += '- Tempo insuficiente\n';
            }
            else if (tempo > 30){
                mensagem += '- Kabum\n'
            }
            else {
                mensagem += '- Prato pronto, bom apetite!!!\n';
            }                    
        break;
        case 2:
            mensagem = 'Macarrão - 8 segundos';
            if(tempo > 16 && tempo <24){
                mensagem += '- Tempo acima do padrão sua comida queimou!!!\n'
            } 
            else if (tempo < 8){
                mensagem += '- Tempo insuficiente\n';
            }
            else if (tempo > 24){
                mensagem += '- Kabum'
            }
            else {
                mensagem += '- Prato pronto, bom apetite!!!\n';
            }  
        break;
        case 3:
            mensagem = 'Carne - 15 segundos';
            if(tempo > 30 && tempo <45){
                mensagem += '- Tempo acima do padrão sua comida queimou!!!\n';  
            } 
            else if (tempo < 15){
                mensagem += '- Tempo insuficiente\n';
            }
            else if (tempo > 45){
                mensagem += '- Kabum\n'
            }
            else {
                mensagem += '- Prato pronto, bom apetite!!!\n';
            }   
        break;
            
        case 4:
            mensagem = 'Feijão - 12 segundos';
            if(tempo > 24 && tempo < 36){
                mensagem += '- Tempo acima do padrão sua comida queimou!!!\n';  
            } 
            else if (tempo < 12){
                mensagem += '- Tempo insuficiente\n';
            }
            else if (tempo > 36){
                mensagem += '- Kabum\n'
            }
            else {
                mensagem += '- Prato pronto, bom apetite!!!\n';
            } 

        break;
        case 5:
            mensagem = 'Brigadeiro - 8 segundos';
            if(tempo > 16 && tempo < 24){
                mensagem += '- Tempo acima do padrão sua comida queimou!!!\n';  
            } 
            else if (tempo < 8){
                mensagem += '- Tempo insuficiente\n';
            }
            else if (tempo > 24){
                mensagem += '- Kabum\n'
            }
            else {
                mensagem += '- Prato pronto, bom apetite!!!\n';
            } 
        break;
        default :
            mensagem += 'Prato inexistente';
           
    }
        return mensagem 
}
console.log(microondas(1,10));
console.log(microondas(2,7));
console.log(microondas(3,46));
console.log(microondas(4,25));
console.log(microondas(10,15));