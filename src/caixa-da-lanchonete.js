class CaixaDaLanchonete {
    cardapio = [
        { codigo: 'cafe', nome: "Café", valorDoProduto: 3.00 },
        { codigo: 'chantily', nome: "Chantily (extra do Café)", valorDoProduto: 1.50 },
        { codigo: 'suco', nome: "Suco Natural", valorDoProduto: 6.20 },
        { codigo: 'sanduiche', nome: "Sanduíche", valorDoProduto: 6.50 },
        { codigo: 'queijo', nome: "Queijo (extra do Sanduíche)", valorDoProduto: 2.00 },
        { codigo: 'salgado', nome: "Salgado", valorDoProduto: 7.25 },
        { codigo: 'combo1', nome: "1 Suco e 1 Sanduíche", valorDoProduto: 9.50 },
        { codigo: 'combo2', nome: "1 Café e 1 Sanduíche", valorDoProduto: 7.50 }
    ];

    calcularValorDaCompra(metodoDePagamento, itens) {
        const formasDePagamento = ['dinheiro', 'debito', 'credito'];

        if (!formasDePagamento.includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let total = 0;
        let isPrincipaisEncontrados = true;
        let pedidos = [];

        

        for (const item of itens) {
            const [codigo, quantidade] = item.split(",");
            const produto = this.cardapio.find(p => p.codigo === codigo);
            pedidos.push(produto);
            if (!produto) {
                return "Item inválido!";
            }

            const quantidadeInt = parseInt(quantidade, 10);

            if (quantidadeInt === 0) {
                return "Quantidade inválida!";
            }

            total += produto.valorDoProduto * quantidadeInt;
        }

        function verificaValor(obj, valorProcurado) {
            for (let chave in obj) {
                if (obj[chave].codigo === valorProcurado) {
                    return true; // Valor encontrado
                }
            }
            return false; // Valor não encontrado
        }

        for (let item of pedidos) {
            if (item.codigo === "chantily") {
                isPrincipaisEncontrados = verificaValor(pedidos, "cafe");
            }
            if (item.codigo === "queijo") {
                isPrincipaisEncontrados = verificaValor(pedidos, "sanduiche");
            }
        }

        if (!isPrincipaisEncontrados) {
            return "Item extra não pode ser pedido sem o principal";
        }

        if (metodoDePagamento === 'credito') {
            total *= 1.03; // 3% de taxa para pagamento no crédito
        }

        if (metodoDePagamento === 'dinheiro') {
            total *= 0.95; // 5% de desconto para pagamento em dinheiro
        }
        let resultado = `R$ ${total.toFixed(2)}`.replace(".", ",");
        return resultado;
    }
}

export { CaixaDaLanchonete };
