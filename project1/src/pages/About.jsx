import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10 space-y-16">
      <h1 className="text-4xl font-bold text-center mb-10">About Culinary Companion</h1>

      {/* Intro Section with Food Image */}
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
          alt="Delicious Dish"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="md:w-1/2 space-y-4">
          <p className="text-lg text-gray-800">
            Culinary Companion is your go-to resource for discovering and sharing delicious recipes. Our mission is to make cooking accessible and enjoyable,
            regardless of skill level. We believe great food brings people together and create memories worth savoring.
          </p>
          <p className="text-lg text-gray-800">
            From traditional classics to innovative creations, Culinary Companion offers inspiration for every meal and palate.
          </p>
        </div>
      </section>

      {/* Featured Dish Section - Text Left, Image Right */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12">
        <img
          src="https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          alt="Prepared Meal"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold">Inspired Recipes Just For You</h2>
          <p className="text-gray-800">
            Our curated recipes come from talented home cooks and professional chefs alike. Whether you’re seeking healthy options, decadent desserts, or quick weeknight meals,
            Culinary Companion has something to inspire your next culinary adventure.
          </p>
          <p className="text-gray-800">
            Join our community and share your own creations to continue spreading the joy of cooking.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Individual Team Members */}
          {[
            {
              name: "Sophia Chen",
              role: "Lead Chef",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5q4xa01xwtYM6lqg2HD7y4TF0RNPdXHWMoFVkjhlN36iArox6ietd2UUAh8f_sPVzAuAa7TFaTMTkEtqEHn-XkzFzx5EtJvbLnO-dVw6ThwLqt94VlISCy8KjTK-12KXfBnGJUpn5ovgelTXnolHdatcR9zun4lhFndLKFFJbvOY02jlGKzFcMWXGxB2-Yx2iqULFaI63H5wuQiNbWNl2nfmVY6c8cOkQMOPE8ZXWeEslKmWlseUMjlEJyNyFmg2fop-o8Y6UxtA",
            },
            {
              name: "Ethan Lee",
              role: "Software Engineer",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDwVOQ141zo5nzUscWiHkiUyVolT_kYz4Y5uyDtji-b-lC6vT7_iNYtBJ7fd-osY0X5bywHB8wkkCtXy58pUe_xJtwGFkcBoTso2fwzlM-e8WcHGax6NJR3wCeDG1VIHccBNMJYPGlBPu0zvy5ZFbjQHL4nc2vsWuj_oOrd_vBc4DtOUlPN8SQprRDRArV4Q55tJxiQcfoR6GFZD_UWrIj2MNqq9oBcltZ3VeemQufEM3Mm_CJHwa5WJ7yvPDOchtCGOVdyzBVbAI",
            },
            {
              name: "Olivia Rodriguez",
              role: "Content Manager",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTwHjRXZRSLDbVVtXQ0Fe88PSwByO5bnYixNOuIEEhVJiGA24nQ2_MeA3vlSCNSMVvI_ucAIPjmwo1cSduf7BGleb1jRIukSankGo_4hfD9fLZYbsP6VAWOQlfpf3T1_E-UkYKo--nMB0J558hkCmLsh0TfLVrsA-306PEnxVWkynKR6polgbYNBqFaH1Ss3ArtGELYmb4Nn_32dE7irGxNU6CCqOSdwt95QEuxDlaoSTHSGr5nbB2UoOw09dgKlAAqeNWM9SdYIo",
            },
          ].map(({ name, role, img }) => (
            <div key={name} className="flex flex-col items-center">
              <img
                src={img}
                alt={name}
                className="rounded-full w-36 h-36 object-cover shadow-md mb-3"
              />
              <p className="text-xl font-semibold">{name}</p>
              <p className="text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center max-w-xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="text-gray-800">
          We'd love to hear from you! Whether you have a question, suggestion, or just want to share your culinary creations, feel free to reach out.
          Contact us at{" "}
          <a href="mailto:support@culinarycompanion.com" className="text-blue-600 underline">
            support@food__advanture.com
          </a>
          .
        </p>

        <div className="flex justify-center gap-8">
          {/* Twitter */}
          <a href="//www.instagram.com/food__advanture/" aria-label="Twitter" className="text-gray-700 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
              <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="//www.instagram.com/food__advanture/" aria-label="Instagram" className="text-gray-700 hover:text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="//www.instagram.com/food__advanture/" aria-label="Facebook" className="text-gray-700 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
