// @ts-nocheck
import React, { useState } from "react";

// ⭐ Your Web3Forms keys
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "b39f08f7-9bfd-45e5-a1bc-7105619bcfd1";

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
const subjectRegex = /^.{3,100}$/;
const messageRegex = /^.{10,1000}$/;

const validateInputs = () => {
  let newErrors: any = {};

  const name = form.name.trim();
  const email = form.email.trim();
  const phone = form.phone.replace(/\D/g, "");
  const subject = form.subject.trim();
  const message = form.message.trim();

  // ✅ Name
  if (!name) {
    newErrors.name = "Name is required";
  } else if (!nameRegex.test(name)) {
    newErrors.name = "Only letters (3–50 characters)";
  }

  // ✅ Email
  if (!email) {
    newErrors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    newErrors.email = "Enter valid email";
  }

  // ✅ Phone
  if (!phone) {
    newErrors.phone = "Mobile number is required";
  } else if (phone.length !== 10) {
    newErrors.phone = "Must be exactly 10 digits";
  } else if (!phoneRegex.test(phone)) {
    newErrors.phone = "Must start with 6-9";
  }

  // ✅ Subject
  if (!subject) {
    newErrors.subject = "Subject is required";
  } else if (!subjectRegex.test(subject)) {
    newErrors.subject = "3–100 characters allowed";
  }

  // ✅ Message
  if (!message) {
    newErrors.message = "Message is required";
  } else if (!messageRegex.test(message)) {
    newErrors.message = "10–1000 characters allowed";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


const handleSubmit = async (e: any) => {
  e.preventDefault();


  if (!validateInputs()) {
    console.log("Validation failed ❌");
    return;
  }

  const formData = new FormData();
  formData.append("access_key", ACCESS_KEY);
  formData.append("name", form.name.trim());
  formData.append("email", form.email.trim());
  formData.append("phone", form.phone.replace(/\D/g, ""));
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
      alert("Message sent successfully! ✅");

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setErrors({}); // ✅ clear errors
    } else {
      alert("Something went wrong ❌");
    }
  } catch (err) {
    console.log(err);
    alert("Network error ❌");
  }
};

const handleChange = (e: any) => {
  let { name, value } = e.target;

  if (name === "phone") {
    value = value.replace(/\D/g, "").slice(0, 10);
  }

  setForm({ ...form, [name]: value });

  // ✅ clear error while typing
  if (errors[name]) {
    setErrors({ ...errors, [name]: "" });
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
  <section
  id="contact"
  className="px-6 py-16 max-w-6xl mx-auto flex flex-col items-center"
>
  <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

  <div className="w-full flex justify-center">
    <div className="space-y-8 w-full max-w-2xl">
      {/* Email */}
      <div className="flex gap-4 items-start p-4 border rounded-lg shadow">
        <MailIcon />
        <div>
          <h4 className="font-bold text-lg">Email</h4>
          <p
            className="cursor-pointer text-primary"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=contact@ganashrioil.org.in"
              )
            }
          >
            contact@ganashrioil.org.in
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
            onClick={() => (window.location.href = "tel:+917795385340")}
          >
            +91 7795385340
          </p>

          <p
            className="cursor-pointer text-primary"
            onClick={() => (window.location.href = "tel:+917406188562")}
          >
            +91 7406188562
          </p>

          <p className="text-gray-600">Mon–Fri, 9am – 6pm</p>
        </div>
      </div>

      {/* Address */}
      <div
        className="flex gap-4 items-start p-4 border rounded-lg shadow cursor-pointer"
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/Rabkavi+Banhatti,+Karnataka/",
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
