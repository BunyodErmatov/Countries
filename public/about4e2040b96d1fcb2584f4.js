;(() => {
	var t = {
			16: () => {
				const t = document.querySelector('.header__dark-mode'),
					n = document.querySelector('body'),
					e = localStorage.getItem('mode') ? localStorage.getItem('mode') : null
				e && n.classList.add('dark-mode'),
					t.addEventListener('click', () => {
						n.classList.toggle('dark-mode'),
							e
								? localStorage.setItem('mode', '')
								: localStorage.setItem('mode', 'dark')
					})
			},
		},
		n = {}
	function e(a) {
		var s = n[a]
		if (void 0 !== s) return s.exports
		var o = (n[a] = { exports: {} })
		return t[a](o, o.exports, e), o.exports
	}
	;(() => {
		'use strict'
		e(16)
		const t = document.querySelector('.css-loader'),
			n = n => {
				n ? t.classList.remove('hidden') : t.classList.add('hidden')
			},
			a =
				(document.querySelector('.cards'),
				document.querySelector('.country-info')),
			s = window.location.search
		;(async t => {
			n(!0)
			const e = await fetch(t)
			if (!e.ok) throw (n(!1), new Error('Something went wrong :('))
			const a = await e.json()
			return n(!1), a
		})(`https://restcountries.com/v3.1${new URLSearchParams(s).get('country')}`)
			.then(t => {
				;(t => {
					const {
							population: n,
							name: e,
							borders: s,
							flags: o,
							capital: r,
							tld: c,
							currencies: i,
							languages: l,
							region: p,
							subregion: u,
						} = t,
						d = Object.values(e.nativeName)[0].official,
						m = Object.keys(i)[0],
						g = Object.values(l)
					a.innerHTML = `\n\t\t\t\t<img class="country-info__img" src=${
						o.svg
					} alt="germany-flag" width="560"\n\t\t\t\theight="400" />\n\t\t\t\t<div class="country-info__content">\n\t\t\t\t<h2>${
						e.common
					}</h2>\n\t\t\t\t\t<ul class="country-info__list">\n\t\t\t\t\t\t<li class="country-info__item">\n\t\t\t\t\t\t\t<p class="name">\n\t\t\t\t\t\t\t\tNative Name:\n\t\t\t\t\t\t\t\t<span>${d}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class="population">\n\t\t\t\t\t\t\t\tPopulation:\n\t\t\t\t\t\t\t\t<span>${n}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class="region">\n\t\t\t\t\t\t\t\tRegion:\n\t\t\t\t\t\t\t\t<span>${p}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class="sub-region">\n\t\t\t\t\t\t\t\tSub Region:\n\t\t\t\t\t\t\t\t<span>${u}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class="capital">\n\t\t\t\t\t\t\t\tCapital:\n\t\t\t\t\t\t\t\t<span>${r}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="country-info__item">\n\t\t\t\t\t\t\t<p class="name">\n\t\t\t\t\t\t\t\tTop Level Domain:\n\t\t\t\t\t\t\t\t<span>${c}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class="population">\n\t\t\t\t\t\t\t\tCurrencies:\n\t\t\t\t\t\t\t\t<span>${m}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class="region">\n\t\t\t\t\t\t\t\tLanguages:\n\t\t\t\t\t\t\t\t<span>${g}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t<div class="country-info__borders">\n\t\t\t\t\t<h3>Border Countries:</h3>\n\t\t\t\t\t${
						s
							? s.map(
									t => `<a href="./about.html?country=/alpha/${t}">${t}</a>`
							  )
							: 'No Borders'
					}\n\t\t\t\t</div>\n\t\t</div>\n\t`
				})(t[0])
			})
			.catch(t => {
				alert(t.message)
			})
	})()
})()
