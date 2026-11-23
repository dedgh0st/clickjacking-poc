"use client";

import { useState } from "react";

export default function HomePage() {
  const [previewed, setPreviewed] = useState(false);

  return (
    <main className="page-shell">
      <p className="simulation-banner">
        Security awareness simulation <span aria-hidden="true">·</span> No real
        account or password data
      </p>

      <section className="alert-card" aria-labelledby="alert-title">
        <p className="card-kicker">Account safety · training simulation</p>

        <div className="alert-icon" aria-hidden="true">
          !
        </div>

        <h1 id="alert-title">
          Some saved passwords may have appeared in a data breach
        </h1>

        <p className="account-line">
          <span className="avatar" aria-hidden="true">
            U
          </span>
          <span>user@example.org · sample account</span>
        </p>

        <hr className="divider" />

        <div className="message">
          <p>
            Some saved passwords may appear in a data breach from a site or
            app. This does not necessarily mean the account itself was
            accessed.
          </p>
          <p>
            A password manager may recommend reviewing and changing affected
            passwords. This fictional page cannot check, collect, or change
            passwords; use a service’s official app or website for account
            security.
          </p>
        </div>

        <button
          type="button"
          className="action"
          onClick={() => setPreviewed(true)}
        >
          View demo guidance
        </button>

        <p className="helper">
          Example security activity address: myaccount.example.org/notifications
        </p>

        {previewed && (
          <p role="status" aria-live="polite" className="status">
            Demo guidance only. No account was checked, changed, or contacted.
          </p>
        )}
      </section>

      <footer className="page-footer">
        Fictional account notice for security education. It is not connected to
        an account or affiliated with a password manager.
      </footer>
    </main>
  );
}
