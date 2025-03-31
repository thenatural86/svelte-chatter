<script>
  import Chit from './Chit.svelte'
  import { ChitStore } from '../stores/ChitStore.js'

  import { onMount, onDestroy } from 'svelte'
  let allChits
  let chitStoreUnsub = ChitStore.subscribe((data) => (allChits = data))

  // onMount(() => {
  //   console.log('component Mounted')
  // })

  onDestroy(() => {
    chitStoreUnsub()
  })
</script>

<div class="all-chits">
  {#each allChits as chit (chit.id)}
    <Chit {...chit} />
  {/each}
</div>
