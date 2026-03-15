import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE, FOOTER_LINKS, LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      {/* CTA Band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to bring calm to your operations?
          </h3>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Join the groups building better, more organized Roblox communities with Superior.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={LINKS.signup} size="lg" external>
              Get Started Free
            </Button>
            <Button href={LINKS.contact} variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-lake-400 to-lake-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
                <span className="text-lg font-bold text-text-primary">{SITE_NAME}</span>
              </Link>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                {SITE_TAGLINE}
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">Product</h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">Company</h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">Legal</h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Superior. All rights reserved.
            </p>
            <p className="text-xs text-text-muted">
              Built with quiet confidence on the North Shore.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
