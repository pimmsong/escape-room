import { useState } from "react";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="max-w-[375px] w-full ">
      <h2 className="roboto-mono text-6xl font-bold text-center">Login</h2>
      <div className="mt-[50px]">
        <form className="flex flex-col gap-8">
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
          <button
            type="submit"
            className="mt-[50px] mx-auto bg-white w-[213px] h-[55px] transition window rounded-[10px] text-[34px] font-bold roboto-mono"
          >
            Enter
          </button>
        </form>
      </div>
    </section>
  );
}
