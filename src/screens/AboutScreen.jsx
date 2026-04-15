export default function AboutScreen({ onBack }) {
  return (
    <div className="screen about-screen">
      <div className="about-topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-mascot">🦊 About Koko's Classroom</span>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Why We Built This</h2>
          <p>
            Koko's Classroom was born out of a simple need — a parent wanting to
            help his 7-year-old son learn foundational skills in a way that's
            engaging, focused, and free from distractions.
          </p>
          <p>
            We couldn't find an app that was simple enough for a young child to
            use independently, aligned to the Singapore MOE syllabus, and didn't
            bombard kids with ads or upsells. So we built one.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Teaching Philosophy</h2>
          <ul className="about-list">
            <li>
              <strong>Mastery-based learning</strong> — Every module must be
              completed with all questions answered correctly. Wrong answers are
              revisited until mastered, not skipped.
            </li>
            <li>
              <strong>Bite-sized modules</strong> — Each module focuses on one
              specific skill with 8-12 questions. Short enough to maintain a
              child's attention, deep enough to build real understanding.
            </li>
            <li>
              <strong>Progressive difficulty</strong> — Modules unlock as the
              child earns stars, ensuring they build on what they've already
              learned. No jumping ahead before they're ready.
            </li>
            <li>
              <strong>Immediate feedback</strong> — Children see right away
              whether they got it right (green) or need to try again (red),
              with encouraging hints rather than punitive "wrong" messages.
            </li>
            <li>
              <strong>Parent-controlled rewards</strong> — Parents choose the
              reward videos. The reward is earned through effort, not given
              freely. Perfect scores unlock the video; anything less motivates
              a reattempt.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>What We Cover</h2>
          <p>
            The Singapore MOE Primary 1–6 syllabus across four subjects:
          </p>
          <ul className="about-list">
            <li><strong>Mathematics</strong> — Numbers, addition, subtraction, shapes, patterns, time, measurement, and money.</li>
            <li><strong>English</strong> — Sight words, phonics, vocabulary, grammar, and reading comprehension.</li>
            <li><strong>Science</strong> — Living things, plants, animals, the human body, and weather.</li>
            <li><strong>Chinese (华文)</strong> — Hanyu Pinyin, basic characters, vocabulary, and simple sentences — entirely in Chinese.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Multiple Choice?</h2>
          <p>
            For 6-7 year olds, multiple choice reduces frustration and keeps the
            focus on recognition and understanding rather than typing or spelling.
            Wrong choices are designed to be plausible (nearby numbers, similar
            words) so the child must truly understand the concept to choose
            correctly.
          </p>
        </section>

        <section className="about-section">
          <h2>Disclaimer</h2>
          <p>
            Koko's Classroom is a supplementary learning tool. It is not a
            replacement for classroom teaching, parental guidance, or
            professional tutoring. While we strive for accuracy in our content,
            we welcome feedback from parents and educators on any errors or
            improvements.
          </p>
          <p>
            This app was built with love by a parent, for parents. We hope your
            child enjoys learning with Koko as much as ours does.
          </p>
        </section>

        <div className="about-footer">
          <span className="about-mascot">🦊</span>
          <p>Made with ❤️ in Singapore</p>
          <p className="about-support">
            Koko's Classroom is free and ad-free.{" "}
            <a href="https://ko-fi.com/kokoclassroom" target="_blank" rel="noopener noreferrer">
              Buy us a coffee
            </a>{" "}
            if you'd like to support the project.
          </p>
        </div>
      </div>
    </div>
  );
}
