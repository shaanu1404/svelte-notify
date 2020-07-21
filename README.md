# Svelte Notifications

Svelte notification adds capibility of creating notifications in a svelte application.
Just import _Notication_ component to the root of the app and use the _notify_ method to create notification.

```javascript
<script>
  import { notify, Notifications } from "svelte-notifications";

  const addNotification = () =>
    notify({
      title: "New Message",
      message: "You message.",
      timeout: 2000,
      type: "danger",
      showAlways: true
    });
</script>

<Notifications position="bottom-right" />
```
