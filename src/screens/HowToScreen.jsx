export default function HowToScreen({ onBack }) {
  return (
    <div className="screen about-screen">
      <div className="about-topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-mascot">🦊 How to Use</span>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Getting Started</h2>
          <p>
            Choose a level (P1–P6), pick a subject, select a topic,
            and tap the ▶ button to begin a module. Complete each module to
            unlock the next one.
          </p>
        </section>

        <section className="about-section">
          <h2>Video Rewards</h2>
          <p>
            Parents can set a YouTube video as a reward for each module.
            Tap "Set reward video" on any module and paste a YouTube link.
          </p>
          <p>
            The video only plays when your child achieves a
            <strong> perfect score</strong> — every question correct on the
            first attempt. This encourages mastery, not just completion.
          </p>
          <p>
            <strong>Tip:</strong> Keep reward videos short (2–5 minutes).
            Longer videos break the learning momentum.
          </p>
        </section>

        <section className="about-section">
          <h2>Stars & Progress</h2>
          <p>
            Each correct answer on the first attempt earns a star.
            Stars reflect your child's best attempt — reattempting a module
            replaces the previous score.
          </p>
        </section>

        <section className="about-section">
          <h2>Speech</h2>
          <p>
            Tap the 🔊 button on the first question to hear it read aloud.
            All following questions are read automatically.
          </p>
        </section>
      </div>
    </div>
  );
}
