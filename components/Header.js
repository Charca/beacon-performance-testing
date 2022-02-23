export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <nav>
        <ul>
          <li>
            <a href="/cloudflare-naive">Cloudflare Pages - Naive</a>
          </li>
          <li>
            <a href="/cloudflare-script">Cloudflare Pages - Next.js Script</a>
          </li>
          <li>
            <a href="/cloudflare-naive-critical">
              Cloudflare Pages - Naive Critical
            </a>
          </li>
          <li>
            <a href="/production-naive">Production - Naive</a>
          </li>
          <li>
            <a href="/production-script">Production - Next.js Script</a>
          </li>
          <li>
            <a href="/production-naive-preconnect">
              Production - Naive with Preconnect Tags
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
