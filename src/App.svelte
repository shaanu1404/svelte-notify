<script>
  import { notify } from "./notification";
  import Notifications from "./notification/Notifications.svelte";
  import Child from "./Child.svelte";

  const addNotification = () =>
    notify({
      title: "New Message",
      message: "you have 14 messages from 4 chats.",
      timeout: 2000,
      type: "info",
      showAlways: true
    });
</script>

<style>

</style>

<main class="container">
  <h1>Svelte Notifications</h1>
  <button on:click={addNotification}>Add Notification</button>
  <Child />
</main>
<Notifications position="bottom-right" />
