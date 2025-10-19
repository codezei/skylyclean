
import faq from './modules/faq'
import works from './modules/works'
import header from './modules/header'
import services from './modules/services'
import reviews from './modules/reviews'
import cta from './modules/cta'
import process from './modules/process'
import accordion from './modules/accordion'
import contacts from './modules/contacts'
import categories from './modules/categories'
import timer from './modules/timer'
import 'regenerator-runtime/runtime';

document.addEventListener('DOMContentLoaded', function () {
	
	header()
	services()
	reviews()
	cta()
	works()
	process()
	accordion()
	categories()
	contacts()
	faq()
	timer()

	AOS.init({
		offset: 80,
		duration: 200,
		easing: 'ease-in',
		once: true,
	});
})

