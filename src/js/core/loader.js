import Events from './events'

export default class Loader {
	constructor(context = document) {
		this.context = context
		this.$wrapper = '.barba-container'
		this.behaviours = []
		Events.on('INIT:BEHAVIOURS', this.mount)
		Events.on('DESTROY:BEHAVIOURS', this.unmount)
	}

	fetch = (context = document) => {
		return Promise.all(
			[...context.querySelectorAll('*[data-behaviour]')]
				.map(node => {
					const behaviours = node
						.getAttribute('data-behaviour')
						.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
						.split(' ')
					return behaviours.map(behaviourName => ({
						behaviourName,
						node: node,
						willDestroy: !!node.closest(this.$wrapper)
					}))
				})
				.reduce((acc, curr) => [...acc, ...curr], [])
				.map(({ node, behaviourName, willDestroy }) => {
					return new Promise((resolve, reject) => {
						import(`@/behaviours/${behaviourName}`)
							.then(resp => {
								return {
									behaviour: resp.default,
									node,
									willDestroy
								}
							})
							.then(resolve)
							.catch(err => {
								console.error(err)
								reject()
							})
					})
				})
		).then(resp => {
			this.behaviours = resp
			return this.behaviours
		})
	}

	/**
	 * Initalize all the behaviours
	 *
	 * @function  mount
	 * @return this
	 */
	mount = (context = document) => {
		this.fetch(context).then(resp => {
			// debugger // eslint-disable-line
			this.behaviours = resp.map(({ node, behaviour: fn, willDestroy }) => {
				const behaviour = new fn(node)
				behaviour.initialize()
				return { behaviour, willDestroy }
			})
		})
	}

	/**
	 * Destroy all the the scoped behaviours and empty the array
	 *
	 * @function  unmount
	 * @return {Loader}
	 */
	unmount = () => {
		// loop over each behaviour and destroy, and empty the array
		this.scoped = this.behaviours
			.filter(({ willDestroy }) => willDestroy)
			.reduce((acc, { behaviour }) => {
				// base destroy, removes event handlers, unmount() called in base
				behaviour.destroy()
				return acc
			}, [])

		return this
	}
}
