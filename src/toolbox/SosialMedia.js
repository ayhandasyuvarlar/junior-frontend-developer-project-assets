import React from "react";

export default function SosialMedia({ sosial, link}) {
  if (sosial === "facebook") {
    return (
      <div className={sosial}>
        <a href={link}>
          <i class="uil uil-facebook-f"></i>
        </a>
      </div>
    );
  } else if (sosial === "twitter") {
    return (
      <div className={sosial}>
        <a href={link}>
          <i class="uil uil-twitter"></i>
        </a>
      </div>
    );
  } else {
    return (
      <div className={sosial}>
        <a href={link}>
          <i class="uil uil-instagram"></i>
        </a>
      </div>
    );
  }
}
