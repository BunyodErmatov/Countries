import request from './request'
import { createCountries } from './updateUI'

const searchFormEl = document.querySelector('.search')

searchFormEl.search.addEventListener('input', () => {
	const searchValue = searchFormEl.search.value.toLowerCase()
	const cardsItem = document.querySelectorAll('.cards__item')
	const cardsTitle = document.querySelectorAll('.cards__title')

	cardsTitle.forEach((title, i) => {
		if (title.textContent.toLowerCase().includes(searchValue)) {
			cardsItem[i].style.display = 'block'
		} else {
			cardsItem[i].style.display = 'none'
		}
	})
})

const searchSelect = document.querySelectorAll('.search__select-list li'),
	searchSelectSpan = document.querySelector('.search__select span')

searchSelect.forEach(li => {
	li.addEventListener('click', () => {
		searchSelectSpan.textContent = li.textContent

		let filterAPi

		if (li.textContent == 'All') {
			filterAPi = 'https://restcountries.com/v3.1/all'
		} else {
			filterAPi = `https://restcountries.com/v3.1/region/${li.textContent}`
		}

		request(filterAPi)
			.then(data => {
				createCountries(data)
			})
			.catch(err => {
				alert(err.message)
			})
	})
})
