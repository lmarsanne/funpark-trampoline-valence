import { createClient } from "https://esm.sh/@supabase/supabase-js@2.76.1";

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const { email, password, secret } = await req.json();

  // Simple secret to prevent unauthorized calls
  if (secret !== "setup-admin-bowling26-init") {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  // Create the user
  const { data: userData, error: createError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (createError) {
    return new Response(JSON.stringify({ error: createError.message }), { status: 400 });
  }

  // Assign admin role
  const { error: roleError } = await supabase
    .from("user_roles")
    .insert({ user_id: userData.user.id, role: "admin" });

  if (roleError) {
    return new Response(JSON.stringify({ error: roleError.message }), { status: 400 });
  }

  return new Response(JSON.stringify({ success: true, user_id: userData.user.id }), {
    headers: { "Content-Type": "application/json" },
  });
});
