export default function Maintenance() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        fontFamily: 'sans-serif',
        color: '#777',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="min-h-dvh"
    >
      <h1>このページは、改修中です。</h1>
      <p>このページは、改修中です。しばらくお待ちください。</p>
      <p>
        Next.js（App Router）middleware の機能で、意図的に /about
        を傍受し、改修ページを表示させています。
      </p>
    </div>
  );
}
