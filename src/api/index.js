const method = 'method';

export default {
    loginUser: () => ("/user-login"),
    searchSupplier: (search) => `/fornecedores?search=${search}`,
    adicionarColeta: (payload) => ("/catador/adicionar-coleta", payload)
}
