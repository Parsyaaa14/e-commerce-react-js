import { data } from "autoprefixer";
import React from "react";
import { FiSettings } from "react-icons/fi";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Rafif",
    Text: "Website ini sangat bagus dan sangat memanjakan mata",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Buyung",
    Text: "Keren Pokoknya",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Aly",
    Text: "Varian Produk Banyak",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 4,
    name: "Dudung",
    Text: "Sangat Puas Dengan Pelayanannya",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Zaki",
    Text: "Websitenya mantap ",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slide to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What Our Customer Are Saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonial
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, odit!
          </p>
        </div>
        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full h-20 w-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500"> {data.Text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
