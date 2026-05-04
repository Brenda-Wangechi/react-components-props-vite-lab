import React from "react";

// Links component: renders auxiliary navigation or external links.
// Use this to hold social links or other site-level navigation. Connected to:
// whatever parent includes it (e.g., `App` or a future `Header`/`Footer`).
function Links() {
  return (
    <nav>
      {/* Minimal placeholder links; replace with real URLs as needed */}
      <a href="#">Home</a>
      {" | "}
      <a href="#">About</a>
    </nav>
  );
}

export default Links;