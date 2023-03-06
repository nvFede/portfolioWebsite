
import React from "react";
import clientsData from "../../data/clientes.json";
import ClientCard from "./ClientCard";
const Clients = () => {
  // const [clients, setclients] = useState([]);

  return (
    <section
      id="clients"
      className="bg-purple-300 md:h-full min-h-screen w-full flex flex-col 
        md:flex-row justify-center pt-8"
    >
      <div className="grid row-span-1 grid-cols-2 md:grid-cols-5 gap-3">
        <ClientCard clientsData={clientsData} />

        {/* <button class="text-green  border border-green uppercase py-2 px-3 focus:outline-none hover:bg-greentint text-lg">
          View More
        </button> */}
      </div> 

      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className="hidden lg:block  background-text text-lightnavy text-center min-h-screen"
      >
        <p> 03. CLIENTS</p>
      </div>
    </section>
  );
};

export default Clients;
