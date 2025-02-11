// https://medium.com/@AllanHasegawa/setting-config-for-firebase-cloud-functions-with-json-136f455e7c69
import child_process from 'child_process'

import {
	ENV,
	ENV_PROJECT_ID,
	ENV_CORS_WHITELIST,
	ENV_ENABLE_PLAYGROUND,
	ENV_APOLLO_ENGINE_API_KEY,
} from './src/constantValues'

const spawn = child_process.spawn

const env = process.env

const obj = {
	[ENV]: {
		[ENV_PROJECT_ID]: env[ENV_PROJECT_ID],
		[ENV_ENABLE_PLAYGROUND]: env[ENV_ENABLE_PLAYGROUND],
		[ENV_APOLLO_ENGINE_API_KEY]: env[ENV_APOLLO_ENGINE_API_KEY],
		[ENV_CORS_WHITELIST]: env[ENV_CORS_WHITELIST],
	},
}

const isObj = x => x !== null && typeof x === 'object'

const parse = tree => {
	const values = []
	const properties = Object.keys(tree)
	properties.forEach(prop => {
		if (isObj(tree[prop])) {
			const children = parse(tree[prop])
			children.forEach(child => {
				const value = `${prop}.${child}`
				values.push(value)
			})
		} else {
			const value = `${prop}="${tree[prop]}"`
			values.push(value)
		}
	})
	return values
}

const runFirebaseConfigSet = properties => {
	return new Promise((resolve, reject) => {
		const args = ['functions:config:set'].concat(properties)
		const cmd = spawn('firebase', args, { shell: true })
		cmd.stdout.setEncoding('utf8')
		cmd.stdout.on('data', data => {
			console.log(data)
		})
		cmd.stderr.on('data', data => {
			console.log('Error:', cmd.stderr.toString())
		})
		cmd.on('close', code => {
			console.log(`Exit code: ${code}`)
			resolve(code)
		})
	})
}
runFirebaseConfigSet(parse(obj))
