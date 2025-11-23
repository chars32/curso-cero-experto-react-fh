import { Outlet } from "react-router";

export const AdminPageLayout = () => {
  return (
    <div className="bg-indigo-500">
      <Outlet />
    </div>
  );
};
