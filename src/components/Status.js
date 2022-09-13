import React from "react";
import StatusReports from "../toolbox/Status-Reports";

export default function Status() {
  return (
    <div className="statusContent"> 
      <StatusReports status={"Published"} />
      <StatusReports status={"Scheduled"} />
      <StatusReports status={"Need Approval"} />
      <StatusReports status={"Error"} />
      <StatusReports status={"Notes"} />
    </div>
  );
}
