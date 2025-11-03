// convex/orders.ts
import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { api } from "./_generated/api";

// This defines the "shape" of the data our function expects
const cartItemValidator = v.object({
  id: v.number(),
  name: v.string(),
  price: v.number(),
  quantity: v.number(),
});

export const createOrder = mutation({
  // These are the arguments our frontend will send
  args: {
    // Customer Details
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    zip: v.string(),
    city: v.string(),
    country: v.string(),
    paymentMethod: v.string(),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPin: v.optional(v.string()),

    // Order Details
    items: v.array(cartItemValidator),

    // Totals
    total: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  },
  
  // This is the code that runs on the server
  handler: async (ctx, args) => {
    
    // Insert the order into the "orders" table
    const orderId = await ctx.db.insert("orders", {
      ...args, // Pass in all the arguments from the form
      createdAt: Date.now(), // Add a server timestamp
    });

    // --- THIS LINE TO SEND THE EMAIL ---
    await ctx.scheduler.runAfter(0, api.email.sendOrderConfirmationEmail, {
        orderId: orderId,
        customerEmail: args.email,
        customerName: args.name,
        items: args.items, // <-- ADDED
        grandTotal: args.grandTotal, // <-- ADDED
        shippingDetails: { // <-- ADDED
        address: args.address,
        zip: args.zip,
        city: args.city,
        country: args.country,
    },
    });

    // Return the ID of the new order
    return orderId;
  },
});