import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="px-4 py-12 max-w-full lg:px-32 mx-auto space-y-16">
      {/* About Us Section */}
      <h2 className="text-3xl font-bold text-center">About Us</h2>
      <section className="flex flex-col-reverse md:flex md:flex-row items-start gap-8 text-justify">
        <div className="flex-1 space-y-4 ">
          <p>
            Welcome to <strong>The Canuck Mall</strong>, Canada’s premier online
            marketplace, where quality meets convenience. We are dedicated to
            providing Canadian consumers with an exceptional shopping experience
            by offering a wide range of products from trusted local sellers.
          </p>
          <p>
            At The Canuck Mall, we believe in empowering small businesses and
            entrepreneurs to reach millions of customers across the country.
            Whether you’re a buyer searching for your next great find or a
            seller looking to expand your reach, we provide the tools and
            support you need to succeed in the world of eCommerce.
          </p>
          <p>
            <strong>Our mission is simple:</strong> to connect people with the
            best products and services while promoting a seamless, secure, and
            reliable shopping environment. From electronics and fashion to home
            goods and beauty, our platform offers a diverse selection of
            high-quality products to meet the needs of every shopper.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/aboutUs/aboutus1.png"
            alt="Shopping Woman"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full  md:w-full"
          />
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="flex flex-col md:flex md:flex-row items-start gap-8">
        <div className="flex-1">
          <Image
            src="/assets/aboutUs/aboutus2.png"
            alt="Happy Shopper"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full  md:w-full"
          />
        </div>
        <div className="flex-1 space-y-2 h-72 text-justify">
          <h2 className="text-3xl font-bold">What Sets Us Apart?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>A Wide Selection:</strong> We curate products from
              top-quality sellers across Canada, ensuring our customers always
              have access to the best products on the market.
            </li>
            <li>
              <strong>Free Seller Registration:</strong> At The Canuck Mall,
              sellers can sign up and list their products at no cost, making it
              easy to get started and grow their business.
            </li>
            <li>
              <strong>Fast and Reliable Shipping:</strong> We work with trusted
              logistics partners to offer quick and efficient delivery to your
              doorstep, no matter where you are in Canada.
            </li>
            <li>
              <strong>Secure Shopping Experience:</strong> Your safety is our
              priority. Our platform is designed with industry-leading security
              protocols to ensure that your personal and payment information is
              always protected.
            </li>
            <li>
              <strong>Customer Support:</strong> Our dedicated support team is
              here to help with any questions or concerns you may have. We’re
              committed to providing you with excellent customer service every
              step of the way.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
