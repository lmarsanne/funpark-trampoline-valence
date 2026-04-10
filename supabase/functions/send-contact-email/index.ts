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

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Input validation
function validateInput(data: ContactEmailRequest): string | null {
  if (!data.fullName || data.fullName.trim().length === 0 || data.fullName.length > 100) {
    return "Invalid name: must be 1-100 characters";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 255) {
    return "Invalid email address";
  }
  if (data.phone && data.phone.length > 20) {
    return "Phone number too long";
  }
  if (data.participants && data.participants.length > 10) {
    return "Participants field too long";
  }
  if (!data.message || data.message.trim().length === 0 || data.message.length > 2000) {
    return "Invalid message: must be 1-2000 characters";
  }
  return null;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    const { fullName, email, phone, participants, message } = data;

    // Server-side validation
    const validationError = validateInput(data);
    if (validationError) {
      console.error("Validation error:", validationError);
      return new Response(
        JSON.stringify({ error: validationError }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Sending contact email from:", email);

    // Escape all user inputs for safe HTML rendering
    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : "";
    const safeParticipants = participants ? escapeHtml(participants) : "";
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Send email to Fun Park Valence
    const emailResponse = await resend.emails.send({
      from: "Fun Park Valence <contact@funpark-valence.fr>",
      to: ["valencebowling@gmail.com"],
      replyTo: email,
      subject: `Nouvelle demande de contact - ${safeFullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #8B5CF6; border-bottom: 3px solid #8B5CF6; padding-bottom: 10px;">
            Nouvelle demande de contact
          </h1>
          
          <div style="margin: 20px 0; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
            <h2 style="color: #333; margin-top: 0;">Informations du contact</h2>
            <p><strong>Nom complet :</strong> ${safeFullName}</p>
            <p><strong>Email :</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            ${safePhone ? `<p><strong>Téléphone :</strong> ${safePhone}</p>` : ""}
            ${safeParticipants ? `<p><strong>Nombre de participants :</strong> ${safeParticipants}</p>` : ""}
          </div>

          <div style="margin: 20px 0;">
            <h2 style="color: #333;">Message</h2>
            <div style="padding: 15px; background-color: #fff; border-left: 4px solid #8B5CF6; border-radius: 5px;">
              ${safeMessage}
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
      JSON.stringify({ error: "An error occurred while sending the email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
