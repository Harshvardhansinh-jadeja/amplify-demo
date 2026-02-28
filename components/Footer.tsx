export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-dark py-10 px-6 text-center">
      <p className="mb-2 text-lg font-bold text-brand">☁ CloudReady</p>
      <p className="mb-1 text-sm text-muted">
        Deployed with <strong className="text-white">AWS Amplify</strong> · Hosted on{" "}
        <strong className="text-white">CloudFront</strong> · SSL by{" "}
        <strong className="text-white">ACM</strong>
      </p>
      <p className="text-xs text-muted">DDIT Nadiad · IT 6th Semester · AWS Seminar 2025</p>
    </footer>
  );
}
