import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RETRO-BOOSTING - Privacy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi a illo ipsam, vero ipsum voluptates recusandae saepe repellat numquam.",
};

function Page() {
  return (
    <div className="py-10 flex flex-col space-y-10 text-light max-w-7xl mx-auto px-1 lg:px-0">
      <h1 className="text-center text-3xl">Privacy</h1>
      <div className="space-y-5 text-center">
        <h2 className="text-xl">1. Introduction</h2>
        <p>
          Welcome to Retro Boosting! At Retro Boosting, we respect your privacy
          and are committed to protecting your personal information. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our website and services. By using Retro
          Boosting, you consent to the practices described in this Privacy
          Policy.
        </p>

        <h2 className="text-xl">2. Information We Collect</h2>
        <p>
          a. Personal Information: When you use Retro Boosting, we may collect
          personal information such as your name, email address, and payment
          information when you make a purchase.
        </p>
        <p>
          b. Log Data: We may also collect information that your browser sends
          whenever you visit our website. This may include your IP address,
          browser type, browser version, the pages you visit, the time and date
          of your visit, and other statistics.
        </p>

        <h2 className="text-xl">3. How We Use Your Information</h2>
        <p>
          a. To Provide Services: We use your personal information to provide
          the services you request, including Elo boosting, arena boosting, and
          coaching.
        </p>
        <p>
          b. To Improve Services: We may use your information to analyze and
          improve our services, including the user experience and the
          effectiveness of our website.
        </p>
        <p>
          c. To Communicate: We may use your email address to send you updates,
          newsletters, and promotional materials. You can opt out of receiving
          these communications at any time.
        </p>

        <h2 className="text-xl">4. How We Share Your Information</h2>
        <p>
          a. Service Providers: We may share your information with third-party
          service providers who assist us in delivering our services. These
          providers are obligated to protect your information.
        </p>
        <p>
          b. Legal Requirements: We may disclose your information to comply with
          legal obligations, enforce our policies, respond to legal actions, or
          protect our rights, privacy, safety, or property.
        </p>

        <h2 className="text-xl">5. Your Choices</h2>
        <p>
          a. Opt-Out: You can opt out of receiving promotional emails from us by
          following the instructions in those emails. However, we may still send
          you transactional or administrative communications.
        </p>
        <p>
          b. Access and Update: You can access and update your personal
          information by contacting us at support@retro-boosting.com.
        </p>

        <h2 className="text-xl">6. Security</h2>
        <p>
          We take reasonable steps to protect your personal information from
          unauthorized access, disclosure, alteration, and destruction. However,
          please note that no data transmission over the internet is 100%
          secure, and we cannot guarantee the security of your information.
        </p>

        <h2 className="text-xl">7. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We encourage you to review this Privacy Policy periodically
          to stay informed about how we are protecting your information.
        </p>

        <h2 className="text-xl">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at support@retro-boosting.com.
        </p>
      </div>
    </div>
  );
}

export default Page;
