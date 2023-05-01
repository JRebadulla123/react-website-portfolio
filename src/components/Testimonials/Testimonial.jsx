import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Sophos from "../../img/sophos.png";


const Testimonial = () => {
  const clients = [
    {
      img: Sophos,
      review:
        "An overview of Sophos cybersecurity solutions for businesses This topic would provide a high-level introduction to Sophos and its various cybersecurity solutions for businesses, including endpoint protection, network security, cloud security, and more. It could also touch on Sophos' approach to threat detection and response, as well as the company's commitment to customer support.",
    },
    {
      img: Sophos,
      review:
        "A deep dive into its advanced threat prevention capabilities This topic would focus specifically on Sophos Intercept X, which is a comprehensive endpoint protection solution that uses advanced machine learning and behavioral analysis to prevent and detect threats. The article could explore the key features of Intercept X, such as exploit prevention, ransomware protection, and deep learning neural networks, as well as real-world examples of how it has been effective in stopping attacks",
    },
    {
      img: Sophos,
      review:
        "The benefits and drawbacks of using Sophos Central as a security management platform Sophos Central is a cloud-based platform that provides a single pane of glass for managing Sophos security solutions across an organization. This topic would explore the pros and cons of using Sophos Central, including ease of use, scalability, and cost-effectiveness, as well as potential downsides like limited customization options and potential reliability concerns.",
    },
    {
      img: Sophos,
      review:
        "How Sophos protects against ransomware and other types of malware Ransomware and other forms of malware continue to be major threats to organizations of all sizes. This topic would delve into how Sophos leverages machine learning, behavioral analysis, and other techniques to detect and prevent these types of attacks. It could also cover best practices for configuring and using Sophos solutions to maximize protection.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>About </span>
        <span>Sophos </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
