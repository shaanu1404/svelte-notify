<script>
  import { notify } from "./notification/index";
  const childClick = type =>
    notify({
      message: "This is a message from child component.",
      timeout: 2000,
      type
    });
</script>

<h1>child component</h1>
<button on:click={() => childClick('default')}>default</button>
<button on:click={() => childClick('warning')}>warning</button>
<button on:click={() => childClick('success')}>success</button>
<button on:click={() => childClick('danger')}>danger</button>
<button on:click={() => childClick('info')}>info</button>
