<svelte:options tag="a-file-tile" />

<script>
  import Trash2 from './trash-2.svelte';
  import Button from '../button/button.svelte';
  import { createEventDispatcher } from 'svelte';
  import formatFileSize from '../utils/format-file-size.js';
  import formatFileType from '../utils/format-file-type.js';

  export let file;

  const dispatch = createEventDispatcher();
</script>

<div class="file-tile">
  <div class="filename">
    {file.name}
  </div>
  <div class="properties">
    {formatFileSize(file.size)} • {formatFileType(file.name)}
  </div>
  <Button danger round on:click={() => dispatch('delete', file)}>
    <Trash2 />
  </Button>
</div>

<style src="./file-tile.scss"></style>
