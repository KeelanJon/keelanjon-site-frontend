# ⚡ KeelanJon Personal Website — Frontend

This is the frontend of my personal website, built to showcase my work in web development, 3D design, and content creation. It’s fast, minimal, and powered by a modern tech stack — connected to a Strapi headless CMS for content management.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**:
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Magic UI](https://magicui.dev/)
- **CMS**: [Strapi](https://strapi.io/)

🔗 [Backend Repository (Strapi)](https://github.com/your-username/your-strapi-backend) <!-- Replace with actual link -->

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-frontend-repo.git
cd your-frontend-repo
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Create `.env.local`

Create a `.env.local` file in the root of the project and add the following:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token
```

> ⚠️ Replace with your actual Strapi instance URL and token.

### 4. Run the Development Server

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
├── app/                 # Pages and layouts using Next.js App Router
├── components/          # Reusable React components
├── lib/                 # API utilities and helpers
├── public/              # Static files
├── styles/              # Tailwind and global styles
├── .env.local           # Environment variables (not committed)
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
- [Render](https://render.com/)

Just make sure to set up your environment variables there.

---

## 🧠 Notes

- This frontend expects a working Strapi backend with collections like `home`, `projects`, and relational fields.
- Data is fetched using `axios` and `async` server components.

---

## 📜 License

This project is open source. Feel free to adapt and reuse it — attribution appreciated.
