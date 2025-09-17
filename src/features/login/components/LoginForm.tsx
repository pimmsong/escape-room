import { useState } from "react";
import Alert from "@shared/ui/Alert";
import Button from "@shared/ui/Button";
import Loading from "@shared/ui/Loading";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenError, setIsOpenError] = useState(false);
  const [isOpenLoading, setIsOpenLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (id === "" || password === "") {
      setIsOpenError(true);
      return;
    }

    if (id === "escape" && password === "room") {
      setIsOpenLoading(true);

      setTimeout(() => {
        // TODO: redirect to /mail
        setIsOpenLoading(false);
      }, 1500);
    } else {
      setIsOpenError(true);
    }
  };

  return (
    <section className="max-w-[375px] w-full ">
      <h2 className="roboto-mono text-6xl font-bold text-center">Login</h2>
      <div className="mt-[50px]">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <input
            type="text"
            value={id}
            placeholder="id_name"
            onChange={(e) => setId(e.target.value)}
            className="p-3 rounded-[10px] border-2 h-14 bg-white border-black placeholder:text-xl roboto-mono focus:outline-primary"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3 rounded-[10px] border-2 h-14 bg-white border-black placeholder:text-xl roboto-mono focus:outline-primary"
          />
          <Button
            label="Enter"
            className="mt-[50px]"
            disabled={id === "" || password === ""}
          />
        </form>
      </div>
      <Alert
        open={isOpenError}
        title="Error"
        message="Not Found."
        onClose={() => {
          setIsOpenError(false);
        }}
      />
      <Alert
        open={isOpenLoading}
        title="Connect"
        onClose={() => {
          setIsOpenLoading(false);
        }}
        content={<Loading />}
        isCancelable={false}
      />
    </section>
  );
}
