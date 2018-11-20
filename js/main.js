console.log("connected");

new Vue({
	el: '#app',
	data: {
		message: 'what is up?',
		coolness: 'hey',
		num:  50,
		bool: false,
		list: [
			{
				name: 'Bob',
				age: 21
			},
			{
				name: 'Joe',
				age: 23	
			},
			{
				name: 'Sue',
				age: 19
			}
		]
	},

	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})



