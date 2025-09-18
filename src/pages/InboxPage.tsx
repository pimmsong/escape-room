import MailContainer from "@features/mail/components/MailContainer";

export default function InboxPage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-grid -z-10" />
      <div className="grid place-items-center min-h-screen">
        <MailContainer />
      </div>
    </div>
  );
}
