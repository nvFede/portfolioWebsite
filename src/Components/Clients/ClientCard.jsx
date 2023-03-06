import React from "react";

const ClientCard = ({ clientsData }) => {
  return (
    <>
      {clientsData &&
        clientsData.map((client, index) => {
          return (
            <a
              href={client.websiteUrl}
              rel="noreferrer"
              target="_blank"
              key={index}
              className="p-0 md:p-4 bg-lightnavy flex align-middle  
              max-h-48 shadow-md md:h-full"
              data-aos="flip-left"
              data-aos-duration={600}
              data-aos-delay={150 * (index + 1)}
              data-aos-easing="ease-out-cubic"
              data-anchor="#clients"
            >
              <div className="flex justify-center align-middle overflow-hidden p-5">
                <img
                  loading="lazy"
                  className="grayscale object-contain  hover:grayscale-0  flex justify-center align-middle"
                  src={require(`../../images/clients/${client.imageUrl}`)}
                  alt={client.altImg}
                ></img>
              </div>
            </a>
          );
        })}
    </>
  );
};

export default ClientCard;
