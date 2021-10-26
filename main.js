const MeuApp = {
    data() {
        return {
            nome: "",
            cpf: "",
            email: "",
            endereco: "",
            n: "",
            bairro: "",
            cidade: "",
            mensagem: "",
            input_nome: "",
            input_cpf: "",
            input_email: "",
            input_endereco: "",
            input_n: "",
            input_bairro: "",
            input_cidade: "",
            input_mensagem: ""
        }
    },
    methods: {
        EnviarForm(e){
            e.preventDefault()
            this.nome = this.input_nome ? this.input_nome : ''
            this.cpf = this.input_cpf ? this.input_cpf : ''
            this.email = this.input_email ? this.input_email : ''
            this.endereco = this.input_endereco ? this.input_endereco : ''
            this.n = this.input_n ? this.input_n : 0
            this.bairro = this.input_bairro ? this.input_bairro : ''
            this.cidade = this.input_cidade ? this.input_cidade : ''
            this.mensagem = this.input_mensagem
            if(!(this.nome && this.cpf && this.email && this.endereco && (this.n >= 0) && this.bairro && this.cidade)) {
                erro1()
            }else{
                showCard()
            }
        }
    }
}

Vue.createApp(MeuApp).mount('#app')

function showCard(){
    document.querySelector(".card").style.display = "block"
}

function erro1() {
    let elemento = document.createElement("div")
    elemento.classList.add('mostErro')
    elemento.innerHTML = "Preencha todos os campos!"
    document.body.appendChild(elemento)    
    setInterval(excluir, 4000)
    function excluir() {
        document.body.removeChild(elemento)
    }
}