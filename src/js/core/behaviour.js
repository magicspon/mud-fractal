import createEvents from '@/core/createEvents'
import refs from '@/core/refs'
import eventBus from '@/core/eventBus'
import resizer from '@/core/resizer'

export default class Behaviour {
	constructor(el = document, name) {
		this.$name = name
		this.$el = el
		this.$eventBus = eventBus
	}

	routes = {
		enter: () => {},
		exit: () => {}
	}

	screens = {}

	init = () => {
		this.$eventBus.on('routes:enter', this.routes.enter)
		this.$eventBus.on('routes:exit', this.routes.exit)
		this.$refs = refs(this.$el)
		this.$screen = resizer(this.screens)
		if (this.events) {
			this.$events = createEvents.call(this, this.$el, this.events)
		}

		return this
	}

	updateRefs = () => {
		this.$refs = { ...this.$refs, ...refs(this.$el) }
	}

	mount = () => {}

	unmount = () => {}

	destroy = () => {
		this.unmount()
		this.$eventBus.off('routes:enter', this.routes.enter)
		this.$eventBus.off('routes:exit', this.routes.exit)
		this.$screen.destroy()

		if (this.events) {
			this.$events.destroy()
		}
	}
}
