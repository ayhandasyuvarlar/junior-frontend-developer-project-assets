import React from "react";

export default function Actions({ data }) {
  return (
    <div className="actionsBar">
      <div className="actionsIcon">
        {data.is_published === true ? (
          <i class="uil uil-check"></i>
        ) : (
          <i class="uil uil-ban"></i>
        )}
      </div>
      <div className="actionsIcon">
        <i class="uil uil-trash-alt"></i>
      </div>
      <div className="actionsIcon">
        <i class="uil uil-bars"></i>
      </div>
    </div>
  );
}
