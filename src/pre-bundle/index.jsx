import React, { useState, useEffect } from "react";
import { debounce } from "lodash-es";

export default function () {
  useEffect(() => {
    const cb = debounce(() => {
      console.log("hello world");
    });

    cb();
  }, []);
  return <div>pre bundle</div>;
}
