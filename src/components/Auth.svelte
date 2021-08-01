<script>
  import { supabase } from "../utils/supabaseClient";

  let loading = false;
  let email = "";

  const handleLogin = async () => {
    try {
      if (!email) throw new Error("Email is required!");
      loading = true;

      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;

      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  };
</script>

<div class="row flex flex-center">
  <div class="col-6 form-widget">
    <h1 class="header">Supabase + Next.js</h1>
    <p class="description">Sign in via magic link with your email below</p>
    <div>
      <input
        class="inputField"
        type="email"
        placeholder="Your email"
        bind:value={email}
      />
    </div>
    <div>
      <button
        on:click|preventDefault={handleLogin}
        class="button block"
        disabled={loading}
      >
        <span>{loading ? "Loading" : "Send magic link"}</span>
      </button>
    </div>
  </div>
</div>
