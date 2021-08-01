<script>
  import { createEventDispatcher } from "svelte";
  import { supabase } from "../utils/supabaseClient";

  const dispatch = createEventDispatcher();

  export let url;
  export let size;

  let avatar_url = null;
  let uploading = false;

  $: url && downloadImage(url);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) throw error;

      const url = URL.createObjectURL(data);
      avatar_url = url;
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  async function uploadAvatar(event) {
    try {
      uploading = true;

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      dispatch("uploaded", { filePath });
    } catch (error) {
      alert(error.message);
    } finally {
      uploading = false;
    }
  }
</script>

<div>
  {#if avatar_url}
    <img
      src={avatar_url}
      alt="Avatar"
      class="avatar image"
      style="height: {size}px; width: {size}px"
    />
  {:else}
    <div class="avatar no-image" style="height: {size}px; width: {size}px" />
  {/if}
  <div style="width: {size}px">
    <label class="button primary block" for="single">
      {uploading ? "Uploading ..." : "Upload"}
    </label>
    <input
      style="visibility: hidden; position: absolute"
      type="file"
      id="single"
      accept="image/*"
      on:change={uploadAvatar}
      disabled={uploading}
    />
  </div>
</div>
