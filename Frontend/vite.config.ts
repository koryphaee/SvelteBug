import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { type UserConfig } from 'vite'

const config: UserConfig = defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 5001,
		strictPort: true,
		host: true
	}
})

export default config
