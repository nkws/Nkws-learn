export default function ErrorFallback() {
  return (
    <div className="screen home-screen" style={{ justifyContent: "center", textAlign: "center" }}>
      <span className="hero-mascot">🦊</span>
      <h1 className="hero-title">Something went wrong</h1>
      <p className="hero-tagline">
        Koko ran into a problem. Refresh the page to try again — your progress is safe.
      </p>
      <button className="btn-primary" onClick={() => window.location.reload()}>
        Refresh
      </button>
    </div>
  );
}
