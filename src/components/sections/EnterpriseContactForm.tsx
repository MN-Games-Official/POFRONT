"use client";

import Button from "@/components/ui/Button";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function EnterpriseContactForm() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-6">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
              Let&apos;s talk about your group
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-xl mx-auto">
              Tell us about your organization and we&apos;ll show you how Superior
              Enterprise can transform your operations.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="group" className="block text-sm font-medium text-text-secondary mb-2">
                Roblox Group Name
              </label>
              <input
                id="group"
                type="text"
                placeholder="Your group name"
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="size" className="block text-sm font-medium text-text-secondary mb-2">
                Group Size
              </label>
              <select
                id="size"
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                defaultValue=""
              >
                <option value="" disabled>
                  Select group size
                </option>
                <option value="50-100">50–100 members</option>
                <option value="100-500">100–500 members</option>
                <option value="500-1000">500–1,000 members</option>
                <option value="1000+">1,000+ members</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                Tell us about your needs
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="What challenges are you looking to solve?"
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Inquiry
            </Button>

            <p className="text-xs text-text-muted text-center">
              We&apos;ll respond within one business day. No spam, ever.
            </p>
          </form>
        </AnimatedReveal>
      </div>
    </section>
  );
}
