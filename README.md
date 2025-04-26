ポートフォリオの簡略化した構成図です。

```txt
==========================================
           VIVOVI Blog Project
==========================================
 │   │   │
 │   │   │ ┌──────────┐
 │   │   └─  Frontend
 │   │     ├──────────┘
 │   │     ├── Next.js
 │   │     │    └── App Router
 │   │     ├── Language
 │   │     │    ├── MDX
 │   │     │    ├── Tailwindcss
 │   │     │    └── TypeScript
 │   │     ├── UI Library
 │   │     │    ├── shadcn/ui
 │   │     │    └── Radix UI
 │   │     ├── Animation Library
 │   │     │    └── Motion
 │   │     └── Contents Library
 │   │          └── Velite
 │   │     ↑↓
 │   │ ┌─────────┐
 │   └─  Backend
 │     ├─────────┘
 │     ├── Restful API
 │     │    ├── Vercel Function
 │     │    └── Supabase RESTful API
 │     ├── RDBMS
 │     │    └── PostgreSQL(Supabase)
 │     └── ORM
 │          └── Prisma
 │     ↑↓
 │ ┌────────────────┐
 └─  Infrastructure
   ├────────────────┘
   ├── Hosting
   │    ├── Frontend
   │    │    └ Vercel（AWS）
   │    └── Backend
   │         └ Supabase（AWS）
   ├── CI/CD
   │    └── GitHub Actions
   └── Networking
        ├── CDN (Vercel Edge Network)
        └── API Gateway
            (Supabase Edge Functions)
```

開発環境は下図の通りです。

```txt
==========================================
        Development Environment
==========================================
 │
 │  ┌────────────────────────────────┐
 ├──  WSL2 (Windows Subsystem Linux)
 │  ├────────────────────────────────┘
 │  ├── Used AI Tools (Free)
 │  │    ├── Chat GPT
 │  │    ├── Gemini
 │  │    ├── Claude
 │  │    └── Github Copilot
 │  ├── DVCS
 │  │    └── Git & Github
 │  ├── IDE
 │  │    └── VSCode
 │  ├── Linter & Formatter
 │  │    ├── Prettier
 │  │    └── Eslint
 │  ├── Container (only Local)
 │  │    ├── Docker Desktop
 │  │    └── Docker Compose
 │  │        ├── Frontend (Node:22 Image)
 │  │        └── Backend (Supabase CLI)
 │  └── Design Tools
 │       ├── Figma
 │       └── Adobe Illustrator
 │
 │  ┌─────────────────────┐
 └──  Windows 11（DIY PC）
    ├─────────────────────┘
    ├── CPU
    │    └── AMD Ryzen 3900X
    ├── GPU
    │    └── NVIDIA GeForce RTX 3060
    ├── Mother
    │    └── MSI MPG B550 GAMING EDGE WIFI
    └── Memory
         └── Patriot Memory 3200
             C16 Series DDR4 ×2
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```tsx:page.tsx
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
```

記事のいいね数を管理する

サーバーコンポーネントでイイね数を取得して、初期表示は静的に

クライアントコンポーネントでイイね数の増減処理

ユーザー情報は保持しない
