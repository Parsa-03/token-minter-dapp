import React from "react";

const Service = () => {
  const services = [
    {
      title: "Secure Storage",
      describtion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis distinctio delectus iusto mollitia fugit tempore debitis aliquid consequuntur quod possimus accusantium, quae excepturi nulla ad eligendi similique et dolor doloribus"
    },
    {
      title: "Mobile App",
      describtion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis distinctio delectus iusto mollitia fugit tempore debitis aliquid consequuntur quod possimus accusantium, quae excepturi nulla ad eligendi similique et dolor doloribus"
    },
    {
      title: "Exchange Service",
      describtion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis distinctio delectus iusto mollitia fugit tempore debitis aliquid consequuntur quod possimus accusantium, quae excepturi nulla ad eligendi similique et dolor doloribus"
    },
    {
      title: "investment Project",
      describtion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis distinctio delectus iusto mollitia fugit tempore debitis aliquid consequuntur quod possimus accusantium, quae excepturi nulla ad eligendi similique et dolor doloribus"
    },
    {
      title: "Credit Card",
      describtion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis distinctio delectus iusto mollitia fugit tempore debitis aliquid consequuntur quod possimus accusantium, quae excepturi nulla ad eligendi similique et dolor doloribus"
    },
    {
      title: "Planning",
      describtion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis distinctio delectus iusto mollitia fugit tempore debitis aliquid consequuntur quod possimus accusantium, quae excepturi nulla ad eligendi similique et dolor doloribus"
    },
  ]
  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4 className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet Our solution for you
              </h4>
              <p className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis necessitatibus, voluptatibus recusandae tempora officia? Modi voluptatibus assumenda accusantium voluptatum temporibus impedit, repellat labore tempore vel ducimus sapiente delectus eius!
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {
            services.map((service, i) => (
              <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
                <div className="box_wrap text-center animation"
                  data-animation="fadeInUp"
                  data-animation-delay={`0.${i + 1}s`}
                >
                  <h4>{service.title}</h4>
                  <p>{service.describtion}</p>

                </div>
              </div>
            ))}
        </div>
      </div>
    </section >
  );
};

export default Service;
