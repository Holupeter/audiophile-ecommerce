"use server";
import { action } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";
import { Doc, Id } from "./_generated/dataModel";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// --- 1. Define the "shape" of our data ---
// We need to define what an item and shipping details look like
const itemValidator = v.object({
  id: v.number(),
  name: v.string(),
  price: v.number(),
  quantity: v.number(),
});

const shippingDetailsValidator = v.object({
  address: v.string(),
  zip: v.string(),
  city: v.string(),
  country: v.string(),
});

// Helper function to format price (can't import from /utils)
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// --- 2. Update the action's arguments ---
export const sendOrderConfirmationEmail = action({
  args: {
    orderId: v.id("orders"),
    customerName: v.string(),
    customerEmail: v.string(),
    items: v.array(itemValidator),
    shippingDetails: shippingDetailsValidator,
    grandTotal: v.number(),
  },

  // --- 3. The handler with the new HTML template ---
  handler: async (ctx, args) => {
    
    // --- 4. Build the HTML for the item summary ---
    const itemsHtml = args.items
      .map(
        (item) => `
          <div style="display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee;">
            <div style="flex-grow: 1;">
              <strong>${item.name}</strong> (x${item.quantity})
            </div>
            <div style="font-weight: bold;">
              ${formatPrice(item.price * item.quantity)}
            </div>
          </div>
        `
      )
      .join("");

    // --- 5. Build the full HTML email ---
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; }
          .container { width: 90%; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
          .header { font-size: 24px; font-weight: bold; color: #D87D4A; }
          .content { margin-top: 20px; }
          .summary { border: 1px solid #eee; border-radius: 8px; margin-top: 20px; }
          .summary-header { background-color: #FAFAFA; padding: 15px; border-bottom: 1px solid #eee; }
          .summary-body { padding: 15px; }
          .shipping { margin-top: 20px; }
          .footer { margin-top: 20px; font-size: 12px; color: #888; }
          .button { display: inline-block; padding: 12px 20px; margin-top: 20px; background-color: #D87D4A; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold; }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: sans-serif;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center">
              <div class="container" style="width: 90%; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <div class="header" style="font-size: 24px; font-weight: bold; color: #D87D4A;">Audiophile</div>
                <div class="content" style="margin-top: 20px;">
                  
                  <h2 style="font-size: 20px;">Thanks for your order, ${args.customerName}!</h2>
                  
                  <p>Your order has been confirmed and will be shipping soon. Your order ID is <strong>${args.orderId}</strong>.</p>
                  
                  <div class="summary" style="border: 1px solid #eee; border-radius: 8px; margin-top: 20px;">
                    <div class="summary-header" style="background-color: #FAFAFA; padding: 15px; border-bottom: 1px solid #eee;">
                      <strong>Order Summary</strong>
                    </div>
                    <div class="summary-body" style="padding: 15px;">
                      ${itemsHtml}
                      <div style="display: flex; padding-top: 15px; margin-top: 10px; border-top: 1px solid #eee;">
                        <div style="flex-grow: 1; text-transform: uppercase; font-weight: bold;">Grand Total</div>
                        <div style="font-weight: bold; font-size: 18px; color: #D87D4A;">
                          ${formatPrice(args.grandTotal)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="shipping" style="margin-top: 20px;">
                    <h3 style="font-size: 16px;">Shipping Details</h3>
                    <p style="margin: 0; padding: 0;">
                      ${args.customerName}<br>
                      ${args.shippingDetails.address}<br>
                      ${args.shippingDetails.city}, ${args.shippingDetails.zip}<br>
                      ${args.shippingDetails.country}
                    </p>
                  </div>
                  
                  <a href="https://your-deployed-site-link.com" class="button" style="display: inline-block; padding: 12px 20px; margin-top: 20px; background-color: #D87D4A; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    View Your Order
                  </a>
                  
                  <div class="footer" style="margin-top: 20px; font-size: 12px; color: #888;">
                    If you have any questions, please contact our support team at <a href="mailto:support@audiophile.com">support@audiophile.com</a>.
                  </div>

                </div>
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    try {
      // --- 6. Send the new HTML email ---
      const data = await resend.emails.send({
        from: "Audiophile <onboarding@resend.dev>", // Or your verified domain
        to: [args.customerEmail],
        subject: `Your Audiophile Order Confirmation (#${args.orderId})`,
        html: emailHtml,
      });

      console.log("Full HTML email sent successfully:", data);
      return data;
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  },
});