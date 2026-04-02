// @ts-nocheck
import React, { useState } from "react";

// ⭐ Your Web3Forms keys
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "0633266a-88b7-4716-a8e2-cb312b17931e";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const nameRegex = /^[A-Za-z\s]{3,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const validateInputs = () => {
    let newErrors: any = {};

    if (!nameRegex.test(form.name))
      newErrors.name = "Enter a valid full name";

    if (!emailRegex.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!phoneRegex.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit mobile number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const formData = new FormData();
    formData.append("access_key", ACCESS_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append(
      "message",
      `Subject: ${form.subject}\n\n${form.message}`
    );
    formData.append("form_type", "Contact Form");

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Try again later!");
      }
    } catch {
      alert("Network error. Please try again!");
    }
  };

  // Modern inline SVG icons
  const MailIcon = () => (
    <svg
      className="w-10 h-10 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0a2 2 0 00-2-2H5a2 2 0 00-2 2m18 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
      />
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      className="w-10 h-10 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.25a2.25 2.25 0 012.25-2.25h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H6.75v1.5a12.042 12.042 0 005.25 5.25h1.5V15.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a2.25 2.25 0 01-2.25 2.25h-1.5A16.5 16.5 0 013 5.25z"
      />
    </svg>
  );

  const MapPinIcon = () => (
    <svg
      className="w-10 h-10 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s8-8 8-13a8 8 0 10-16 0c0 5 8 13 8 13z"
      />
    </svg>
  );

  return (
    <section id="contact" className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT: CONTACT FORM */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="font-medium">Full Name *</label>
              <input
                className="w-full border p-2 rounded"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="font-medium">Email *</label>
              <input
                type="email"
                className="w-full border p-2 rounded"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="font-medium">Phone *</label>
              <input
                className="w-full border p-2 rounded"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="font-medium">Subject *</label>
              <input
                className="w-full border p-2 rounded"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-medium">Message *</label>
              <textarea
                rows={5}
                className="w-full border p-2 rounded"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: CONTACT DETAILS */}
        <div className="space-y-6">
          {/* Email */}
          <div className="flex gap-4 items-start p-4 border rounded-lg shadow">
            <MailIcon />
            <div>
              <h4 className="font-bold text-lg">Email</h4>
              <p
                className="cursor-pointer text-primary"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=contact@shreebalajifoundation.org.in"
                  )
                }
              >
                contact@ganshrioil.org.in
              </p>
              <p className="text-gray-600">Send us an email anytime</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4 items-start p-4 border rounded-lg shadow">
            <PhoneIcon />
            <div>
              <h4 className="font-bold text-lg">Phone</h4>
              <p
                className="cursor-pointer text-primary"
                onClick={() => (window.location = "tel:+918087678977")}
              >
                +91 8087678977
              </p>
              <p
                className="cursor-pointer text-primary"
                onClick={() => (window.location = "tel:+918459485202")}
              >
                +91 8459485202
              </p>
              <p className="text-gray-600">Mon–Fri, 9am – 6pm</p>
            </div>
          </div>

          {/* Address */}
          <div
            className="flex gap-4 items-start p-4 border rounded-lg shadow cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Rabkavi+Banhatti,+Karnataka/@16.483528,75.1205313,15z/data=!3m1!4b1!4m6!3m5!1s0x3bc730c4c74169e1:0x7a009f84902ec864!8m2!3d16.4823017!4d75.12243!16zL20vMGY2MjJ6?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D",
                "_blank"
              )
            }
          >
            <MapPinIcon />
            <div>
              <h4 className="font-bold text-lg">Address</h4>
              <p>Banahatti, Karnataka, India</p>
              <p className="text-gray-600">Visit our shop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;