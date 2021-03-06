import React, { useState, useEffect } from "react";

export default function () {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div>
      Page has been open for <code>{count}</code> seconds.
    </div>
  );
}
