document.addEventListener('DOMContentLoaded', function () {
	revealOnScroll()
	window.addEventListener('scroll', revealOnScroll)
})

function revealOnScroll() {
	var hiddenElements = document.querySelectorAll('.hidden')
	hiddenElements.forEach(function (element) {
		var rect = element.getBoundingClientRect()
		if (rect.top < window.innerHeight) {
			element.classList.add('visible')
		} else {
			element.classList.remove('visible')
		}
	})
}

function getDataAndShowCards() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			const mainDiv = document.getElementById('cards')
			data.forEach(user => {
				const cardHTML = `
				<div class="hidden card">
				<div>
					<div class='card__title'>
						<img width="20px" height="20px" src="./img/home.svg" />
						<h2>Adress</h2>
						<div>
    					<h3>City: ${user.address.city}</h3>
    					<h3>Street: ${user.address.street}</h3>
    					<h3>ZipCode: ${user.address.zipcode}</h3>
						</div>

					</div>
				</div>
				<div>
					<h2>${user.name}</h2>
					<div class="card__div1">
						<img width="20px" src="./img/user.svg" />
						<h3>${user.username}</h3>
						</div>
						<div class='card__contact'>
							<div>
								<h3>Website</h3>
								<a href="http://${user.website}">${user.website}</a>
							</div>
							<div>
							<h3>Phone</h3>
							<h4>${user.phone}</h4>
							</div>
						</div>
				</div>
				<div>
					<div class='card__title'>
						<img width="20px" height="20px" src="./img/building.svg" />
						<h2>Company</h2>
						<div>
    					<h3>Name: ${user.company.name}</h3>
    					<h3>${user.company.catchPhrase}</h3>
    					<h3>${user.company.bs}</h3>
						</div>
					</div>
				</div>
			</div>`
				mainDiv.innerHTML += cardHTML
			})

			revealOnScroll()
		})
		.catch(error => {
			console.log('Произошла ошибка:', error)
		})
}

getDataAndShowCards()

const sInput = document.getElementById('sInput')
const clear = document.getElementById('clear')

clear.addEventListener('click', function () {
	sInput.value = ''
})
