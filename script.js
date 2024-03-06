const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    for(let i = 0; i < barbearia.cortes.length; i++) {
        if(barbearia.cortes[i].id === id) {
            return barbearia.cortes[i]
        }
    }
    return `Corte não encontrado`
}

function buscaBarbaPorId(id) {
    for(let i = 0; i < barbearia.barbas.length; i++) {
        if(barbearia.barbas[i].id === id) {
            return barbearia.barbas[i]
        }
    }
    return `Barba não encontrada`
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto) {
        return `Estamos abertos`
    } else {
        return `Estamos fechados`
    }
}

function retornaTodosCortes() {
    return barbearia.cortes
}

function retornaTodasBarbas() {
    return barbearia.barbas
}

function criaPedido(nomeCliente, corteId, barbaId) {
    let corteIs = buscaCortePorId(corteId)
    let barbaIs = buscaBarbaPorId(barbaId)
    let pedido = {
        nome: nomeCliente,
        pedidoCorte: corteIs.tipo,
        pedidoCortePreco: corteIs.valor,
        pedidoBarba: barbaIs.tipo,
        pedidoBarbaPreco: barbaIs.valor
    }
    return pedido
}

function atualizarServico(lista, id, valor, tipo) {
    for(let i = 0; i < lista.length; i++) {
        if(lista[i].id === id) {
            lista[i].valor = valor
            lista[i].tipo = tipo
        }
    }
    return lista
}
// Se puder explicar para mim, o por quê que lista é lida diretamente como > barbearia.lista < (ou seja barbearia.cortes ou barbearia.barbas) eu agradeço. Pois tentei fazer do jeito que fazia sentido: Chamando a variável "barbearia" com a propriedade que deveria ser a lista mencionada no parâmetro

function calculaTotal(pedido) {
    let precoCorte = pedido.pedidoCortePreco
    let precoBarba = pedido.pedidoBarbaPreco
    let priceTotal = precoCorte + precoBarba

    return priceTotal
}