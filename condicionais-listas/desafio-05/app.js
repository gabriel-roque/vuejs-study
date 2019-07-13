new Vue({
	el: '#desafio',
	data: {
		status: true,
		nomes: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livros: {
			titulo: 'O Senhor dos Aneis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		alunos: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		}
	},
	methods: {
		setStatus(){
			this.status = !this.status
		}	
	},
});
