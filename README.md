> [`bunyan`](https://www.npmjs.com/package/bunyan) is a nice JSON logger, it would be nice to expose it globally so I can call `logger.info(...)` everywhere...

# 1. Install Bunyan

Add `bunyan` and (dev) `@types/bunyan`

# 2. Declare the types in `ambient.d.ts`

```ts
import type bunyan from 'bunyan'

declare global {
    var logger: bunyan
}
```

Alternatively, if you're not using an ambient type declaration file pop lines 3-5 into your entry file

# 3. Initialise global variable `logger`

> In your entry file (or wherever loads before any call to the `logger` object)

```ts
import * as bunyan from 'bunyan' // Alternative: import bunyan from 'bunyan'

globalThis.logger = bunyan.createLogger({
  name: "{{ YOUR LOGGER NAME HERE }}"
})
```

# 4. $$$

Now you can call `logger.info(...)`
