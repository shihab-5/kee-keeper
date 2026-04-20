# 🤝 KeenKeeper

> A personal relationship tracker that helps you stay connected with the people who matter most — log interactions, set contact goals, and never let a friendship go cold.

---

## 🔗 Links

- **Live Demo:** [](#)
- **Repository:** [github.com/shihab-5/kee-keeper](https://github.com/shihab-5/kee-keeper)

---

## 📖 Description

KeenKeeper is a friendship management dashboard built with React. It lets you track all your friends, see who you haven't contacted in a while, log interactions like calls, texts, and video chats, and visualize your relationship habits — all in one clean, responsive interface.

---

## ✨ Key Features

- 👫 **Friend Dashboard** — View all friends as cards with color-coded contact status (on-track, almost due, overdue)
- 📜 **Interaction Timeline** — Auto-logged history of every call, text, and video interaction, with filter support
- 📊 **Friendship Analytics** — Pie chart showing a breakdown of your interaction types at a glance

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| [React.js](https://reactjs.org/) | Build the UI |
| [React Router DOM](https://reactrouter.com/) | Handle page navigation |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsiveness |
| [Recharts](https://recharts.org/) | Analytics pie chart |

---

## 🧠 What I Learned

Building KeenKeeper taught me a lot of practical React skills that go beyond tutorials:

- **React Router DOM** — How to set up multi-page navigation in a single-page app, pass data via route params, and handle 404 routes cleanly
- **Component thinking** — Breaking UI into reusable pieces like `FriendCard`, `TimelineEntry`, and `StatCard` made the codebase much easier to manage
- **State management** — Using `useState` and `useEffect` to manage friend data, timeline entries, and UI interactions without a backend
- **Recharts** — Integrating a third-party chart library and feeding it dynamic data for the analytics page
- **Responsive design with Tailwind** — Using grid and flex utilities to make layouts work across mobile, tablet, and desktop without writing custom CSS
- **Deployment gotchas** — Learned that React Router breaks on page reload after deployment, and how to fix it with a `_redirects` file or rewrite rules

---

## 😌 Things That Made Life Easier

- **Tailwind CSS** — No context-switching between `.css` files; styling inline kept me in flow
- **React Router's `useParams`** — Simple way to grab a friend's ID from the URL and render the right detail page
- **`useState` for the timeline** — Storing timeline entries in state meant no backend needed; interactions logged instantly
- **Recharts' `<PieChart>`** — Plug-and-play charting with minimal setup; just pass the data array and it renders
- **Browser DevTools responsive mode** — Saved a lot of time testing different screen sizes

---

## ⚙️ Getting Started

```bash
# Clone the repo
git clone https://github.com/shihab-5/kee-keeper.git

# Move into the folder
cd kee-keeper

# Install dependencies
npm install

# Run the dev server
npm run dev
```

App runs at `http://localhost:5173`

---

## 🚀 Deployment Note

To prevent page-reload errors after deployment, add the following:

**Netlify** — create `/public/_redirects`:
```
/*  /index.html  200
```

**Vercel** — create `vercel.json` at the root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

> Built with ❤️ — because good friendships deserve a little extra effort.