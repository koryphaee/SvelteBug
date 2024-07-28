# Minimal reproducible example for a Svelte routing bug

## Steps to observe the bug:

1. Clone the repository
2. Run `docker compose up`
3. Open `http://localhost:5000/charts`
4. Svelte should now display `src/routes/charts/+page.svelte` but it displays `src/routes/[mode]/+page.svelte` instead
5. Funnily enough going to `favorites` will correctly show `src/routes/favorites/+page.svelte`

If you rename the folder `charts` to anything else like `harts` or `a` or `123` it also works.

Maybe Svelte doesn't like mainstream music?

## Further observations

* The container uses ASP.NET Core as the backend to serve the Svelte frontend because that's what I am using in the project where I discovered the bug.

* If you run the project using `npm run dev` the bug does not occur, which is weird because the bug happens entirely on the client side.
This can be confirmed by using the browser dev tools.
There are no network requests when switching between the pages using the links.