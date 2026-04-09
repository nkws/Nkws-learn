import Clock from "../components/Clock";

export default function WelcomeScreen({ progress, onStart }) {
  const isReturning = progress.lastSession !== null;

  return (
    <div className="screen welcome-screen">
      <div className="welcome-clock floating">
        <Clock hours={10} minutes={10} size={180} />
      </div>

      <div className="welcome-mascot">🦊</div>
      <h1 className="welcome-heading">Hi Keanu!</h1>
      <p className="welcome-sub">
        I&apos;m <strong>Koko</strong>, your time-telling buddy!
      </p>

      {isReturning && (
        <div className="welcome-progress">
          <span>⭐ {progress.stars} stars</span>
          <span className="welcome-divider">•</span>
          <span>Level {progress.level}</span>
        </div>
      )}

      <button className="btn-primary pulse" onClick={onStart}>
        Let&apos;s Go! 🚀
      </button>
    </div>
  );
}
