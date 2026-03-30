# Next.js SaaS Dashboard — Supabase Auth • Dark/Light Mode • Analytics • Settings

A full-featured, modern SaaS dashboard built with **Next.js 15**, **Supabase**, and **Tailwind CSS v4**.  
This project was designed to demonstrate real-world production patterns suitable for startups, clients, and internal tools.

It includes:

- 🔐 **Supabase Auth** (client + server)
- 🧭 **Protected Dashboard Routes**
- 🎨 **Dark/Light Mode with Local Persistence**
- 📊 **Analytics Dashboard with Chart.js**
- 👤 **User Profile Editing + Avatar Upload**
- ⚙️ **Full Preference System Stored in Supabase**
- 🧩 **Beautiful UI Components (cards, toggles, dropdowns)**
- 🛠️ **Server Actions + Zod validation**

---

## ✨ Features

### 🔐 Authentication
- Email/password login with Supabase.
- Server-side session validation (no client spoofing).
- Automatic redirect to `/login` for logged-out users.

### 🧭 Dashboard Shell
- Responsive sidebar with icons
- Sticky header with theme toggle
- Root `/` → redirects to `/dashboard`
- Fully mobile-responsive

### 📊 Analytics Module
Interactive charts powered by **chart.js** and **react-chartjs-2**:
- User Growth
- Monthly Revenue
- Device Distribution

Charts auto-adjust to dark/light mode.

### 👤 Profile Management
Users can:
- Upload an avatar (stored in Supabase Storage)
- Edit their full name
- Persist everything via Server Actions

### ⚙️ App Preferences
Saved directly to Supabase:
- Theme preference (light, dark, system)
- Email notifications
- Push notifications
- Language preference

RLS policies ensure each user **only accesses their own data**.

---

## 🗄️ Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **React 18**
- **Tailwind CSS v4**
- **Chart.js**
- **Lucide Icons**

### Backend
- **Supabase** (Auth + Database + Storage)
- **PostgreSQL**
- **RLS (Row Level Security)**

### Development
- TypeScript
- Server Actions
- Zod validation
- ESLint
- Turbopack

---

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

📦 Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev
```
App will be available at:
```text
http://localhost:3000
```

🧪 Demo Credentials (Optional)

If you want to include a demo user for clients:

```text
Email: [EMAIL_ADDRESS]
Password: [PASSWORD]
```

📁 Project Structure

```text
app/
 ├─ login/
 ├─ dashboard/
 │   ├─ analytics/
 │   ├─ settings/
 │   └─ layout.tsx
components/
lib/
supabase/
```

🧩 Notable Implementations
Server-Side Auth Guard

Ensures dashboard routes are protected:

Uses Supabase’s SSR client
Validates session on every request
Redirects unauthenticated users
Avatar Upload Pipeline
Client picks image →
Server Action uploads to Supabase Storage →
Database row updated with URL →
Revalidates dashboard instantly
Fully Synced Theme System
Local storage persistence
System theme detection
No hydration errors

📸 Screenshots (optional for Upwork)

Add screenshots showing login → dashboard → analytics → settings → avatar upload.

📝 License

MIT

💬 Author

Built by Marlon Montesino — Frontend Developer.

If you're a client viewing this project from Upwork:
Feel free to contact me for custom SaaS dashboards, automation systems, CRM portals, or Supabase-powered applications.

