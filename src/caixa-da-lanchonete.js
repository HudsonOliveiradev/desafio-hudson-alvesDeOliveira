class CaixaDaLanchonete {

    cardapio = [
{codigo: cafe, nome: "Café", valorDoProduto: 3.00},
{codigo: chantily, nome: "Chantily (extra do Café)", valorDoProduto: 1.50},
{codigo: suco, nome: "Suco Natural", valorDoProduto: 6.20},
{codigo: sanduiche, nome: "Sanduíche", valorDoProduto: 6.50},
{codigo: queijo, nome: "Queijo (extra do Sanduíche)", valorDoProduto: 2.00},
{codigo: salgado, nome: "Salgado", valorDoProduto: 7.25},
{codigo: combo1, nome: "1 Suco e 1 Sanduíche" , valorDoProduto: 9.50},
{codigo: combo2, nome: "1 Café e 1 Sanduíche", valorDoProduto: 7.50}
];  

    formaDePagamento = {'Débito': 1, 'Crédito': 1.03, 'Dinheiro': 0.95
    };
    
    valorDacompra(formaDePagamento, itens) {
        const pedido = [];
        let total = 0;
    
        for(const itemPedido of itens){
            const [codigo, quantidade] = itemPedido.trim().split(',');

      const item = this.cardapio.find(item => item.codigo === codigo);

      if (quantidade <= 0) {
        return "Quantidade inválida!";
      }
  
      if (!item) {
        return "Item inválido!";
      }
      
      itensDoPedido.push({ ...item, quantidade: parseInt(quantidade) });
      total += item.valor * parseInt(quantidade);
    }

    if (itensDoPedido.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    if (formaDePagamento !== 'debito' && formaDePagamento !== 'credito' && formaDePagamento !== 'dinheiro') {
      return "Forma de pagamento inválida!";
    }

    const descontoTaxa = this.descontosTaxas[formaDePagamento];

    total += total * descontoTaxa;

    return `R$ ${total.toFixed(2).replace('.', ',')}`;
        }
    }

    calcularValorDaCompra(metodoDePagamento, itens); {
        return "";
    }

export { CaixaDaLanchonete };
