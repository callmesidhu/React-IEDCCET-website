


import image from "../assets/startup.png";
import Footer from "../components/Startups/Footer";
import Navbar from "../components/landing/Navbar";

function StartupCard({ title, description, image }) {
    return (
      <div className="bg-white  rounded-xl overflow-hidden w-96 flex flex-col border border-blue-500">
        <div className=" ">
          <img 
            src={image || "/placeholder.svg"} 
            alt={title} 
            className="w-full h-full object-fit rounded-t-lg p-4"
          />
        </div>
        <div className="p-5 pr-6">
          <h3 className="text-3xl font-bold text-blue-600 mb-2">{title}</h3>
          <p className="text-gray-700  text-sm mb-4 w-[90%]">{description}</p>
          <p className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 text-sm font-medium flex justify-end mt-10">
            Know more &gt;
          </p>
        </div>
      </div>
    );
  }
  
  
export default function Startups() {
    const Startups=[
        {
            title: "Startup 1",
            date: "2023-10-01",
            image: image,
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            title: "Startup 1",
            date: "2023-10-01",
            image: image,
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            title: "Startup 1",
            date: "2023-10-01",
            image: image,
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            title: "Startup 1",
            date: "2023-10-01",
            image: image,
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            title: "Startup 1",
            date: "2023-10-01",
            image: image,
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        // Add more startups as needed
    ]
    return (
        <div>
            <Navbar />
       <div className="flex flex-col items-start justify-start p-40 min-h-screen bg-[#F8F6F3] overflow:hidden">
            <h1 className="text-4xl font-bold text-[#0732EF] ">STARTUPS</h1>
            
            <div className="flex flex-wrap flex-row gap-10 mt-10 p-20">
                {Startups.map((startup, index) => (
                    <StartupCard
                    
                        title={startup.title}
                        description={startup.content}
                        image={startup.image}
                    />
                ))}
        </div>
        </div>
        <Footer />
    
        </div>
    );
    }