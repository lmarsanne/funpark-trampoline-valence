import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  fullName: string;
  email: string;
  phone?: string;
  participants?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, phone, participants, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email from:", email);

    // Send email to Fun Park Valence
    const emailResponse = await resend.emails.send({
      from: "Fun Park Valence <onboarding@resend.dev>",
      to: ["valencebowling@gmail.com"],
      replyTo: email,
      subject: `Nouvelle demande de contact - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #8B5CF6; border-bottom: 3px solid #8B5CF6; padding-bottom: 10px;">
            Nouvelle demande de contact
          </h1>
          
          <div style="margin: 20px 0; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
            <h2 style="color: #333; margin-top: 0;">Informations du contact</h2>
            <p><strong>Nom complet :</strong> ${fullName}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
            ${participants ? `<p><strong>Nombre de participants :</strong> ${participants}</p>` : ""}
          </div>

          <div style="margin: 20px 0;">
            <h2 style="color: #333;">Message</h2>
            <div style="padding: 15px; background-color: #fff; border-left: 4px solid #8B5CF6; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Cet email a été envoyé depuis le formulaire de contact du site Fun Park Valence.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
