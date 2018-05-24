import cache from '@/core/router/cache'

export default (pathname, options = {}, type = 'text') => {
	return new Promise(resolve => {
		if (cache.get(pathname)) {
			log('from cache')
			resolve()
			return
		}

		fetch(pathname, options)
			.then(response => response[type]())
			.then(data => {
				cache.set(pathname, {
					data
				})
				resolve()
			})
	})
}
