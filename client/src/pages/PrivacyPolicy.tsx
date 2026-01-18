import { useSEO } from "@/hooks/useSEO";

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy",
    description: "KetoMindset Privacy Policy. Learn how we collect, use, and protect your information.",
    url: "/privacy-policy",
    noindex: true,
  });
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90">Last updated: January 4, 2026</p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Introduction</h2>
          <p>
            KetoMindset ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the website includes:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name and email address, that you voluntarily give to us when you register or when you choose to participate in various activities.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed.</li>
          </ul>

          <h2>Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
          </p>
          <ul>
            <li>Create and manage your account</li>
            <li>Email you regarding your account or orders</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
            <li>Generate a personal profile about you to make future visits more personalized</li>
            <li>Increase the efficiency and operation of the website</li>
            <li>Monitor and analyze usage and trends to improve your experience</li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul>
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to comply with the law or protect our rights.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf.</li>
          </ul>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: privacy@ketomindset.org
          </p>
        </div>
      </section>
    </div>
  );
}
