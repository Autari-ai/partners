export default function Footer() {
  return (
    <footer className="bg-bark py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-bold text-cream">
              au<span className="text-ember">t</span>ari
            </p>
            <p className="mt-2 text-sm text-cream/40">
              Automate your comfort.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-medium uppercase tracking-[0.08em] text-cream/40">
            <a
              href="mailto:noor@autari.co.uk"
              className="transition-colors hover:text-cream"
            >
              Contact
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8">
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Autari Ltd. Registered in England
            &amp; Wales. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
