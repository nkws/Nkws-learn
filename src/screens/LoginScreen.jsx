import { useAuth } from "../contexts/AuthContext";

export default function LoginScreen({ onSkip }) {
  const { signInWithGoogle, isConfigured } = useAuth();

  return (
    <div className="screen home-screen">
      <div className="hero-section">
        <span className="hero-mascot">🦊</span>
        <h1 className="hero-title">Koko's Classroom</h1>
        <p className="hero-tagline">
          Free interactive learning for Primary 1–3, aligned to the Singapore MOE syllabus.
        </p>
      </div>

      {isConfigured ? (
        <div className="login-actions">
          <button className="btn-primary" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
          <button className="about-link" onClick={onSkip}>
            Continue without signing in
          </button>
          <p className="privacy-notice">
            We store your email and your children's learning progress to sync across devices. We don't share your data with third parties. By signing in, you agree to this.
          </p>
        </div>
      ) : (
        <div className="login-actions">
          <button className="btn-primary" onClick={onSkip}>
            Start Learning
          </button>
        </div>
      )}
    </div>
  );
}
