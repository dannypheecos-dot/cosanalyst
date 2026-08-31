import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">404</p>
          <h1>No print on this path.</h1>
          <p>
            The desk does not invent a page to fill a miss. Back to{" "}
            <Link href="/">Home</Link> or <Link href="/research/">Research</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
