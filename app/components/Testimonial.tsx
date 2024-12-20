const Testimonial = ({ text, date }: { text: string; date: string }) => {
    return (
      <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-start shadow-black">
        <p className="text-black text-md mb-2">{text}</p>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
    );
  };

export default Testimonial;
  