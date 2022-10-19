<script lang='ts'>
  import { TabLocation } from '../types.js';
  import Tab from './Tab.svelte';

  export let tabs = [];
</script>

{#each tabs as tab}
{#if tab.location == TabLocation.Default}
<Tab type={tab.type}/>
{/if}
{/each}