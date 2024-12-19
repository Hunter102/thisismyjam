import { useInView } from "react-intersection-observer";

export default function AnimatedGrid() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div className="grid xl:grid-cols-9 xl:grid-rows-14 w-full p-4 shadow-xl gap-6">
        <div  
            ref={ref2}
            className={`xl:col-start-2 xl:col-end-5 row-span-6 mt-10 h-[60vh] rounded-md flex items-center justify-center ${
                inView2 ? "visible" : ""
            }`}
            >
            <img
                src={"/imgs/img1.jpg"}
                alt="Image 1"
                className="object-cover w-auto h-auto mt-10 border-4 shadow-xl shadow-black"
            />
        </div>
        <div
            ref={ref1}
            className={`xl:col-start-6 xl:col-end-9 xl:mt-20 row-span-6 h-[60vh] rounded-md flex flex-col xl:items-start justify-start items-center p-6 fade-in-right ${
                inView1 ? "visible" : ""
            }`}
            >
                <h1 className="text-lbl xl:text-5xl text-3xl mb-4">
                    Small Batches 
                </h1>

                <h2 className="text-background xl:text-lg text:sm xl:text-start text-center gap-10 grid grid-rows-3">
                    <h1> Jam is all about the fruit!</h1>
                    <h1> With a low-sugar recipe you really taste the richness of the fruit.</h1>
                    <h1> Have the flavor of summer all year long. </h1>
                </h2>
        </div> 

        <div
            ref={ref4}
            className={`xl:col-start-2 xl:col-end-5 row-span-6 xl:mb-10 h-[60vh] rounded-md flex items-center justify-center ${
                inView4 ? "visible" : ""
            }`}
            >
            <img
                src={"/imgs/img2.jpg"}
                alt="Image 2"
                className="object-cover w-auto h-auto xl:mt-10 border-4 shadow-xl shadow-black"
            />
        </div>
        <div
            ref={ref3}
            className={`xl:col-start-6 xl:col-end-9 xl:mt-10 xl:row-span-6 h-[60vh] rounded-md flex flex-col xl:items-start items-center justify-start p-6 fade-in-right ${
                inView3 ? "visible" : ""
            }`}
            >
                <h1 className="text-lbl xl:text-5xl text-3xl xl:mb-10 mb-4">
                    Fresh & Local Fruit
                </h1>

                <h2 className="text-background xl:text-lg text-sm xl:text-start text-center xl:mb-6 gap-10 grid grid-rows-3">
                    <h1> Handpicked by Kimberly and her family.</h1>
                    <h1> Purchased at local farms that grow the fruit.</h1>
                    <h1> Turned into jam within 48 hours! </h1>
                </h2>
        </div>
    </div>
  );
}
