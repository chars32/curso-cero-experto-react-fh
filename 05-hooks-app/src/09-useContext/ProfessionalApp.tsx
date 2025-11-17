import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export default function ProfessionalApp() {
  return (
    <div className="bg-gradient">
      <RouterProvider router={appRouter} />
    </div>
  );
}
