import loader from '@/core/modules/loader'
import Router from '@/core/router/index'
import eventBus from '@/core/modules/eventBus'

export default (() => {
	return class App {
		constructor({ router, chunks }) {
			if (router) {
				this.$router = new Router({ ...router })
			}

			this.$loader = loader(chunks)
		}

		mount = () => {
			this.$loader.hydrate(document)

			this.$router && this.$router.mount().lazyload()

			eventBus.on('route:before:dom:update', () => {
				this.$loader.unmount()
			})

			eventBus.on('route:after:dom:update', ({ newHtml }) => {
				this.$loader.hydrate(newHtml)
			})
		}
	}
})()
