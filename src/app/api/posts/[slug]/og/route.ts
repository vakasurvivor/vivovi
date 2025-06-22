// import { ImageResponse } from '@vercel/og'
// import { NextRequest } from 'next/server'

// // Font を読み込む場合はここに
// export const runtime = 'edge'

// export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
//   const { slug } = params

//   // DBやCMSから記事情報を取得（ここではモック）
//   const post = await getPostMeta(slug) // title, summaryなどを取得

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           fontSize: 60,
//           background: '#1a202c',
//           color: 'white',
//           width: '1200px',
//           height: '630px',
//           padding: '60px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//         }}
//       >
//         <h1>{post.title}</h1>
//         <p style={{ fontSize: 30, color: '#cbd5e0' }}>{post.summary}</p>
//       </div>
//     ),
//     {
//       width: 1200,
//       height: 630,
//     }
//   )
// }

// // 仮のデータ取得関数
// async function getPostMeta(slug: string) {
//   return {
//     title: `記事タイトル - ${slug}`,
//     summary: 'これは記事の概要文です。',
//   }
// }
