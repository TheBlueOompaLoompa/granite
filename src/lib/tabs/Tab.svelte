<script lang='ts'>
  import type { TabLocation } from '../types.js';
  import Editor from './types/Editor.svelte';

  export let type: TabLocation;
</script>

{#if type == 'editor'}
<Editor/>
{/if}