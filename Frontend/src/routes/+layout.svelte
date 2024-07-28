<script lang="ts">
	import '../app.css'
	const items = ["/", "/charts", "/favorites", "/foo"]
</script>

<div class="flex flex-col gap-2">
	{#each items as item}
		<a class="underline text-purple" href={item}>{item}</a>
	{/each}
</div>

<slot />
