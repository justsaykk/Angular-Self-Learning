### What did I do?
I ran a cli command:
`tsc --init`
which generated a `tsconfig.json` file

Then, I changed the following properties:
```json
"target": "es5"
"noEmitOnError": true
```

Now, there is no need to enable the flags when compiling