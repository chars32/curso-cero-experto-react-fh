import { useContext, useState } from "react";
import { UserContext } from "@/09-useContext/context/UserContext";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export default function LoginPage() {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState("");

  const navigation = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = login(Number(userId));

    if (!result) {
      toast.error("Usuario no encontrado");
      return;
    }

    navigation("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar Sesión</h1>

      <hr />

      <form
        className="flex flex-col gap-2 my-10"
        onSubmit={(event) => handleSubmit(event)}
      >
        <Input
          type="number"
          placeholder="ID del usuario"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />

        <Button type="submit">Login</Button>

        <Link to="/about">
          <Button variant="ghost">Volver pagina principal</Button>
        </Link>
      </form>
    </div>
  );
}
