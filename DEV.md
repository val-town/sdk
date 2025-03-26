# Development

If you want to test the generated sdk locally, first run `npm run build`.

```bash
npm run build
touch ./examples/index.mjs
```

In your `index.mjs` (which can go anywhere, we're just making use of the
examples folder) import the sdk from `./dist`.

```ts
import ValTown from "../dist/index.js";

const client = new ValTown({});

console.log(await client.alias.username.projectName.retrieve("maxm", "monke"));

let count = 0;
for await (
    const file of client.projects.files.retrieve(
        "57fa9f5c-0a6a-11f0-b501-569c3dd06744",
        {
            path: "",
            recursive: true,
            limit: 10,
        },
    )
) {
    console.log(file, count++);
}
```

Then you can play around with the sdk, set an api key, experiment, etc.
