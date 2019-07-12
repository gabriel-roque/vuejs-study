new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe2: '',
		classe3: '',
		monitorar: '',
		cor: '',
		classe4: {
			width: '100px',
			height: '100px'
		},
		width: 0
	},
	watch: {
		monitorar(novo){
			novo == 'false' ? this.classe3 = ' ' : this.classe3 = 'mar'
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() =>{
				this.classe1 = this.classe1 == 'destaque'
					? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() =>{
				valor += 25
				this.width =  `${valor}%`
				if (valor == 100) clearInterval(temporizador)
			}, 800)
			
		}
	}
})