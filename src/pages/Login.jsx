import { useState } from "react";
import { supabase } from "../supabase/client";

function Login() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await supabase.auth.signInWithOtp({
        email,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="youremail@site.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Login;
