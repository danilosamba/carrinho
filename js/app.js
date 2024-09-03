//Atualizar o total
let totalGeral = 0;

document.getElementById('lista-produtos').innerHTML = "";
document.getElementById('valor-total').textContent = "R$ 0,00";



function adicionar(){
// Recuperar descrição, valor e quantidade
    let produto = document.getElementById('produto').value; 
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    console.log (`Verificar String Quantidade: ${quantidade.value}`)
    
//Calcular Preço
    let preco = quantidade.value * valorUnitario;    

//verificar quantidade
if (quantidade.value === "" || quantidade.value === null || typeof quantidade.value === "undefined") {
    alert("Digite a quantidade para continuar");
    return;
}
//verificar descrição
if (nomeProduto === "" || nomeProduto === null || typeof nomeProduto === "undefined") {
    alert("Selecione o nome do produto para continuar");
    return;
}

//Add no Carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul"> R$${preco}</span>
        </section>
      </section>`
        limparCampos();

            
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$${totalGeral}`;



    console.log(`Nome do Produto: ${nomeProduto} Valor Unitário: ${valorUnitario} Total: R$${preco}`)

}





function limpar(){
    //Limpar carrinho
    document.getElementById('lista-produtos').innerHTML = "";
    document.getElementById('valor-total').textContent = "R$ 0,00";
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
}

function limparCampos(){
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
}