# svelte-notify

**svelte-notify** adds capibility of creating notifications in a svelte application.
By default it is positioned at the bottom-right of the screen. The notifications can be generated with different color defining type of the message.
It can be one of the following

- default
- success
- danger
- info
- warning

### Installing svelte-notify

```bash
npm install svelte-notify
```

### Usage

To use notifications, the app should import **Notifications** component from "svelte-notify".

```javascript
<script>
  import Notifications from "svelte-notify";
</script>

<Notifications />
```

The notification works when `notify` function is triggered which is imported from the same package.

```javascript
import { notify } from "svelte-notify";
```

`notify` takes an object to define the message.

```javascript
import { notify } from "svelte-notify";

notify({
  title: /* Message title */,
  message: /* Message */,
  timeout: /* Timeout in millis */,
  type: /* Type as string */,
  showAlways: /* Boolean */
});
```

- _type_ must be one of the above given types.
- _showAlways_ must be a boolean which tells the alert to always stay on the screen or fade away with time (the timeout).

**svelte-notify** also ships with one more functions `clearAll`.

```javascript
import { clearAll } from "svelte-notify";

clearAll();
```

It clears all the notifications on the screen.
