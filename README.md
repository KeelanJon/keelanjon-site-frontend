# ⚡ KeelanJon Personal Website — Frontend

This is the frontend for keelanjon.com, built with Next.js and styled using Tailwind CSS. It features a modern component-based UI powered by shadcn/ui and Magic UI, designed to be fast, responsive, and easy to update. The backend and content is powered by Strapi CMS, Hosted on [Strapi Cloud](https://strapi.io/cloud)

## 🔗 Related Repositories

- **Frontend**: [keelanjon-site-frontend](https://github.com/KeelanJon/keelanjon-site-frontend)

- **Backend**: [keelanjon-site-backend (Strapi)](https://github.com/KeelanJon/keelanjon-site-backend)

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**:
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Magic UI](https://magicui.dev/)
- **CMS**: [Strapi](https://strapi.io/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KeelanJon/keelanjon-site-frontend.git
cd frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Create `.env.development`

Create a `.env.development` file in the root of the project and add the following:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token
```

> ⚠️ Replace with your actual Strapi instance URL and token.
> 🚀 https://localhost:1337 is the default Strapi local server port.

### 4. Run the Development Server

Start the frontend development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
.
├── app/                 # Pages and layouts using Next.js App
├── components/          # Reusable React components
├── lib/                 # API utilities and helpers
├── public/              # Static files
├── styles/              # Tailwind and global styles
├── .env.production      # Environment variables (not committed)
├── .env.development     # Environment variables (not committed)
├── next.config.js       # Next.js configuration
```

---

## ✨ Features

- CMS-driven content from Strapi
- Dark mode support
- SEO optimization with dynamic meta tags
- Optimised image handling using `next/image`
- Markdown rendering with Tailwind Typography

---

## 📤 Deployment

You can deploy this frontend to platforms like:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)

Just make sure to set up your environment variables there.

---

## 🧠 Notes

- This frontend expects a working Strapi backend with collections like `home`, `projects`, and relational fields.
- Data is fetched using `fetch`, `axios` and `async` server components.

---

## 📜 License

This project is open source. Feel free to adapt and reuse it — attribution appreciated.
