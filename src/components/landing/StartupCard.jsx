import { motion } from "framer-motion";


export default function StartupCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden w-sm flex flex-col border border-blue-500">
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

