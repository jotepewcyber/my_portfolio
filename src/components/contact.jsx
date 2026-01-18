import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <h1 className="text-4xl font-bold text-orange-500 mb-6">
          Let’s Connect
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          I’m always open to collaborating on meaningful projects related to
          <span className="text-orange-400"> Web Development </span>
          and
          <span className="text-orange-400"> Cyber Security</span>.
          If you have an idea, a project, or an opportunity where we can work
          together and learn from each other, I’d love to connect.
        </p>

        <p className="text-gray-300 mb-4">
          You can reach me directly at:
        </p>

        <p className="text-lg font-semibold text-orange-400 mb-8">
          📧 arunodayvmtiwari1102@email.com
        </p>

        <p className="text-gray-400 text-sm">
          Let’s build secure, scalable, and impactful solutions together.
        </p>

      </div>
    </section>
  );
}

export default Contact;
