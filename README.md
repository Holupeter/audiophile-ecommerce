# Audiophile E-commerce Website

This is a full-stack, pixel-perfect e-commerce application built for the Audiophile brand, based on a provided Figma design. The project is a complete, interactive shopping experience, from browsing products to a fully functional checkout with order confirmation emails.

![A screenshot of the Audiophile e-commerce website homepage.](https://orion-audiophile-ecommerce.netlify.app/assets/home/image-hero-desktop.jpg)

## 🚀 Live Demo

**Check out the live, deployed version here:** [https://orion-audiophile-ecommerce.netlify.app/](https://orion-audiophile-ecommerce.netlify.app/)

---

## 🌟 Key Features

* **Pixel-Perfect & Responsive Design:** Matches the Figma design across mobile, tablet, and desktop using CSS Modules for scoped, component-level styling.
* **Dynamic Routing:** Uses Next.js App Router for dynamic category pages (`/headphones`, `/speakers`) and product detail pages (`/headphones/xx99-mark-two`).
* **Full-Stack Cart:** A global cart state (using React Context) allows users to add, remove, and update item quantities from any page, with data persisting across the app.
* **Complete Checkout Flow:** A multi-step checkout form with real-time, inline validation (using React Hook Form).
* **Live Database:** Uses **Convex** as a full-stack backend to securely save all customer and order details to a live database upon successful checkout.
* **Transactional Emails:** Automatically sends a custom, responsive HTML order confirmation email to the customer using **Resend** after the order is saved.

---

## 💻 Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript
* **Backend & Database:** [Convex](https://www.convex.dev/)
* **Styling:** CSS Modules
* **Form Management:** [React Hook Form](https://react-hook-form.com/)
* **Email Service:** [Resend](https://resend.com/)
* **Deployment:** [Netlify](https://www.netlify.com/)

---

## ⚙️ Getting Started & Local Setup

While the easiest way to see the project is on the live link, you can also run it locally.

### 1. View the Live Project

This project is deployed and live on Netlify. You can view and test it here:

**Live Demo:** [https://orion-audiophile-ecommerce.netlify.app/](https://orion-audiophile-ecommerce.netlify.app/)

### 2. Local Installation (Optional)

If you want to run this on your local machine:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Holupeter/audiophile-ecommerce.git](https://github.com/Holupeter/audiophile-ecommerce.git)
    cd audiophile-ecommerce
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Set Up the Backend (Convex):**
    * Sign up for a free account at [Convex.dev](https://www.convex.dev/).
    * On your dashboard, create a new project.
    * Link your local project by running:
        ```bash
        npx convex dev
        ```

4.  **Set Up the Email Service (Resend):**
    * Sign up for a free account at [Resend.com](https://resend.com/).
    * Go to the **API Keys** tab, create a new API key, and copy it.
    * Go to your **Convex Dashboard**, select your project, and go to **Settings** > **Environment Variables**.
    * Add a new variable: `RESEND_API_KEY` and paste your API key.

5.  **Create Your Environment File:**
    * In the root of your project, create a new file named `.env.local`.
    * Go to your **Convex Dashboard** > **Settings** and copy your variables into the file:
        ```
        NEXT_PUBLIC_CONVEX_URL="[https://your-project-url.convex.cloud](https://your-project-url.convex.cloud)"
        CONVEX_DEPLOYMENT="your-deployment-key"
        ```

6.  **Run the Project:**
    This project requires **two terminals** running at the same time:

    * **Terminal 1 (Backend):**
        ```bash
        npx convex dev
        ```

    * **Terminal 2 (Frontend):</b>
        ```bash
        npm run dev
        ```

    Open `http://localhost:3000` in your browser.

---

## 🙏 Acknowledgements

* This project is based on a "pixel-perfect" challenge. The original Figma design was provided for this task.
* **Figma Design:** [Audiophile E-commerce Website](https://www.figma.com/design/jfDxXzGw2lfyJOgFGbJOW4/audiophile-ecommerce-website)