import LoginForm from "@features/login/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-grid -z-10" />
      <div className="grid place-items-center min-h-screen">
        <LoginForm />
      </div>
    </div>
  );
}
