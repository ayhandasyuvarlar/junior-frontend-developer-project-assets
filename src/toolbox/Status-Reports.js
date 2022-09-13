import React from "react";

export default function StatusReports({ status }) {
  if (status === "Published") {
    return (
      <div style={{ color: "gray" }} className={status}>
        <div className="circle"></div>
        <p className="statusText">{status}</p>
      </div>
    );
  } else if (status === "Scheduled") {
    return (
      <div style={{ color: "green" }} className={status}>
        <div className="circle"></div>
        <p className="statusText">{status}</p>
      </div>
    );
  } else if (status === "Need Approval") {
    return (
      <div style={{ color: "goldenrod" }} className={'Need-Approval'}>
        <div className="circle"></div>
        <p className="statusText">{status}</p>
      </div>
    );
  } else if (status === "Error") {
    return (
      <div style={{ color: "red" }} className={status}>
        <div className="circle"></div>
        <p className="statusText">{status}</p>
      </div>
    );
  } else if (status === "Notes") {
    return (
      <div style={{ color: "blue" }} className={status}>
        <div className="circle"></div>
        <p className="statusText">{status}</p>
      </div>
    );
  }
}
