"use client";

import { useState } from "react";

export default function HomePage() {
  const [previewed, setPreviewed] = useState(false);

  return (
    <>
      <div className="ribbon mono">
        EDUCATIONAL SIMULATION — Defensive Frame Protection · No Real Account
        Action
      </div>
      <main className="wrap page">
        <header className="grid gap-5">
          <p className="eyebrow mono">Browser security / frame policy</p>
          <h1 className="mono">A mock account action, protected by policy.</h1>
          <p className="intro">
            This page demonstrates a normal account confirmation surface and
            blocks all framing. The control below is a local preview only; it
            does not change account data or navigate away.
          </p>
        </header>

        <section className="panel" aria-labelledby="account-action-title">
          <div className="panel-head">
            <div className="grid gap-2">
              <p className="eyebrow mono">Account settings</p>
              <h2 id="account-action-title" className="mono text-2xl">
                Confirm account action
              </h2>
            </div>
            <span className="badge mono">Protected from framing</span>
          </div>

          <div className="mock-card">
            <p>
              Review this mock action before continuing. Nothing is submitted
              and no account state is stored.
            </p>
            <button
              type="button"
              className="action mono"
              onClick={() => setPreviewed(true)}
            >
              Preview mock action
            </button>
            {previewed && (
              <p role="status" className="status mono">
                Preview only. No account state was changed.
              </p>
            )}
          </div>
        </section>

        <section className="grid gap-4" aria-labelledby="protection-title">
          <h2 id="protection-title" className="mono text-xl">
            Response headers
          </h2>
          <pre className="headers mono">
            <code>{`Content-Security-Policy: frame-ancestors 'none'`}</code>
            <code>X-Frame-Options: DENY</code>
          </pre>
          <p className="explanation">
            These headers instruct browsers not to render this page inside a
            frame. If your application needs trusted embedding, use a
            deliberate origin allowlist instead of disabling protection
            everywhere.
          </p>
        </section>

        <footer className="mono">
          Defensive demonstration only. No iframe, cross-window messaging,
          third-party content, or hidden click target is used.
        </footer>
      </main>
    </>
  );
}
