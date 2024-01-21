import React from "react";
import Analytics from "./@analytics/page";

const layoutDashboard = ({ children, product, analytics }: { children: React.ReactNode, product:React.ReactNode, analytics:React.ReactNode }) => {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-5 flex gap-3">{product}{analytics}</div>

    </div>
  );
};

export default layoutDashboard;
