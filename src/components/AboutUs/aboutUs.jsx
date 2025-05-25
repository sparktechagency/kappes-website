import provideIcon from "@/common/components/provideIcon";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="  py-12  mx-auto space-y-16">
      {/* About Us Section */}
      <h2 className="text-3xl font-bold text-center font-comfortaa">
        About Us
      </h2>
      <section className="flex flex-col-reverse md:flex-row items-start max-w-7xl mx-auto gap-10 text-justify px-4 lg:px-0">
        <div className="w-full md:w-1/2 space-y-4">
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
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/aboutUs/aboutus1.png"
            alt="Shopping Woman"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </section>
      {/*Mission & Vision Section */}
      <section className="flex flex-col md:flex-row items-start max-w-7xl mx-auto gap-10 px-4 lg:px-0">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/aboutUs/mission&vision.png"
            alt="Happy Shopper"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-justify">
          <h2 className="text-3xl font-bold font-comfortaa">
            Mission & Vision
          </h2>
          <div className="">
            <p>
              At The Canuck, our mission is to connect Canadians with local
              products, services, and businesses from coast to coast. We strive
              to provide a seamless, engaging shopping experience that showcases
              the best of Canada’s diverse regions, celebrating the
              craftsmanship, culture, and creativity of Canadian vendors.
            </p>
            <br /> Our vision is to become the leading platform for supporting
            local businesses, fostering community growth, and offering a unique,
            personalized shopping experience. Through every purchase, we aim to
            celebrate Canada’s rich heritage and diverse offerings, bringing
            Canadians closer to what makes their country special.
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-start gap-10 ">
        <div className="bg-kappes w-full h-[40%] px-10 py-10 ">
          <Image
            src="/assets/aboutUs/video.png"
            alt="Happy Shopper"
            width={5000}
            height={5000}
            className="rounded-md object-cover w-7xl  mx-auto h-auto  "
          />
        </div>
      </section>
      {/* What Sets Us Apart Section */}
      <section className="flex flex-col md:flex-row items-start max-w-7xl mx-auto gap-10 px-4 lg:px-0">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/aboutUs/aboutus2.png"
            alt="Happy Shopper"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-justify">
          <h2 className="text-3xl font-bold font-comfortaa">
            What Sets Us Apart?
          </h2>
          <div className="flex gap-5">
            <div>
              <div className="bg-kappes w-fit p-4 rounded-full">
                {provideIcon({ name: "aboutus1" })}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">A Wide Selection</h3>
              <p>
                We curate products from top-quality sellers across Canada,
                ensuring our customers always have access to the best products
                on the market.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="bg-kappes w-fit p-4 rounded-full">
                {provideIcon({ name: "aboutus2" })}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">A Wide Selection</h3>
              <p>
                We curate products from top-quality sellers across Canada,
                ensuring our customers always have access to the best products
                on the market.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="bg-kappes w-fit p-4 rounded-full">
                {provideIcon({ name: "aboutus3" })}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">A Wide Selection</h3>
              <p>
                We curate products from top-quality sellers across Canada,
                ensuring our customers always have access to the best products
                on the market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
