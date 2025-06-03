document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-produto");
    const tabela = document.getElementById("tabela-produtos");

    const carregarProdutos = () => {
        const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        tabela.innerHTML = "";

        produtos.forEach(prod => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
        <td>${prod.codigo}</td>
        <td>${prod.nome}</td>
        <td>${prod.quantidade}</td>
        <td>${prod.unidade}</td>
        <td>${prod.marca}</td>
        <td>${prod.categoria}</td>
        <td>${prod.localizacao}</td>
        <td>R$ ${prod.custo || 0}</td>
        <td>R$ ${prod.preco || 0}</td>
        <td>${prod.fornecedor}</td>
        <td>${prod.validade || "-"}</td>
      `;
            tabela.appendChild(tr);
        });
    };

    form.addEventListener("submit", e => {
        e.preventDefault();

        const produto = {
            codigo: form.codigo.value,
            nome: form.nome.value,
            categoria: form.categoria.value,
            marca: form.marca.value,
            unidade: form.unidade.value,
            quantidade: form.quantidade.value,
            minimo: form.minimo.value,
            localizacao: form.localizacao.value,
            custo: form.custo.value,
            preco: form.preco.value,
            fornecedor: form.fornecedor.value,
            validade: form.validade.value
        };

        const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        produtos.push(produto);
        localStorage.setItem("produtos", JSON.stringify(produtos));

        form.reset();
        carregarProdutos();
    });

    carregarProdutos();
});

function b_produtos() {
    document.getElementById("container_produtos").classList.remove("hidden");
    document.getElementById("container_estoque").classList.add("hidden");
    document.getElementById("container_movimentacoes").classList.add("hidden");
}
function b_estoque() {
    document.getElementById("container_produtos").classList.add("hidden");
    document.getElementById("container_estoque").classList.remove("hidden");
    document.getElementById("container_movimentacoes").classList.add("hidden");
}
function b_movimentacoes() {
    document.getElementById("container_produtos").classList.add("hidden");
    document.getElementById("container_estoque").classList.add("hidden");
    document.getElementById("container_movimentacoes").classList.remove("hidden");
}