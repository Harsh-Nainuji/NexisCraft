import { useEffect } from "react";

function RedirectToDiscord() {
  useEffect(() => {
    window.location.href = "https://discord.gg/nVaqhGrv55";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-xl">
      Redirecting to Discord server...
    </div>
  );
}

export default RedirectToDiscord;
