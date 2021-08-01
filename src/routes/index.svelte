<script>
  import { onMount } from "svelte";
  import { supabase } from "../utils/supabaseClient";
  import Auth from "../components/Auth.svelte";
  import Account from "../components/Account.svelte";

  /** @type {import("@supabase/supabase-js").Session} */
  let session;

  onMount(() => {
    session = supabase.auth.session();

    supabase.auth.onAuthStateChange((_event, _session) => {
      session = _session;
    });
  });
</script>

<div class="container" style="padding: 50px 0 100px 0">
  {#if !session}
    <Auth />
  {:else}
    {#key session.user.key}
      <Account {session} />
    {/key}
  {/if}
</div>
