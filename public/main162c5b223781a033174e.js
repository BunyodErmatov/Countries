;(() => {
	var t = {
			16: () => {
				const t = document.querySelector('.header__dark-mode'),
					e = document.querySelector('body'),
					o = localStorage.getItem('mode') ? localStorage.getItem('mode') : null
				o && e.classList.add('dark-mode'),
					t.addEventListener('click', () => {
						e.classList.toggle('dark-mode'),
							o
								? localStorage.setItem('mode', '')
								: localStorage.setItem('mode', 'dark')
					})
			},
		},
		e = {}
	function o(n) {
		var a = e[n]
		if (void 0 !== a) return a.exports
		var s = (e[n] = { exports: {} })
		return t[n](s, s.exports, o), s.exports
	}
	;(() => {
		'use strict'
		const t = document.querySelector('.css-loader'),
			e = e => {
				e ? t.classList.remove('hidden') : t.classList.add('hidden')
			},
			n = async t => {
				e(!0)
				const o = await fetch(t)
				if (!o.ok) throw (e(!1), new Error('Something went wrong :('))
				const n = await o.json()
				return e(!1), n
			},
			a = document.querySelector('.cards'),
			s = t => {
				;(a.innerHTML = ''),
					t.forEach(t => {
						const e = document.createElement('li')
						e.classList.add('cards__item')
						const o = t.flags.svg,
							n = t.name.common,
							s = t.population,
							c = t.region,
							r = t.capital ? t.capital[0] : 'No Capital'
						;(e.innerHTML = `\n\t\t\t<a href="./about.html?country=/name/${n}">\n\t\t\t\t<img src=${o} alt=${n}>\n\t\t\t\t<div class="cards__item-inner">\n\t\t\t\t\t<h3 class="cards__title">${n}</h3>\n\t\t\t\t\t<p class="population">Population: <span>${s}</span></p>\n\t\t\t\t\t<p class="region">Region: <span>${c}</span></p>\n\t\t\t\t\t<p class="capital">Capital: <span>${r}</span></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t`),
							a.append(e)
					})
			},
			c =
				(document.querySelector('.country-info'),
				document.querySelector('.search'))
		c.search.addEventListener('input', () => {
			const t = c.search.value.toLowerCase(),
				e = document.querySelectorAll('.cards__item')
			document.querySelectorAll('.cards__title').forEach((o, n) => {
				o.textContent.toLowerCase().includes(t)
					? (e[n].style.display = 'block')
					: (e[n].style.display = 'none')
			})
		})
		const r = document.querySelectorAll('.search__select-list li'),
			l = document.querySelector('.search__select span')
		r.forEach(t => {
			t.addEventListener('click', () => {
				let e
				;(l.textContent = t.textContent),
					(e =
						'All' == t.textContent
							? 'https://restcountries.com/v3.1/all'
							: `https://restcountries.com/v3.1/region/${t.textContent}`),
					n(e)
						.then(t => {
							s(t)
						})
						.catch(t => {
							alert(t.message)
						})
			})
		}),
			o(16),
			n('https://restcountries.com/v3.1/all')
				.then(t => {
					s(t)
				})
				.catch(t => {
					alert(t.message)
				})
	})()
})()
