import { useInView } from "react-intersection-observer";

export default function AnimatedGrid() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div className="grid grid-cols-9 grid-rows-14 w-full p-4 shadow-xl bg-nutb gap-6">
        <div  
            ref={ref2}
            className={`col-start-2 col-end-5 row-span-6 mt-10 h-[60vh] rounded-md flex items-center justify-center text-nuto text-3xl ${
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
            className={`col-start-6 col-end-9 mt-10 row-span-6 bg-nutb h-[60vh] rounded-md flex flex-col items-start justify-start p-6 fade-in-right ${
                inView1 ? "visible" : ""
            }`}
            >
                <h1 className="text-lbl text-5xl mb-4">
                    Small Batches 
                </h1>

                <h2 className="text-background text-lg text-start leading-relaxed grid grid-rows-3">
                    <h1> Jam is all about the fruit!</h1>
                    <h1> With a low-sugar recipe you taste the fruit.</h1>
                    <h1> Have the taste of summer all year long. </h1>
                </h2>
        </div> 

        <div
            ref={ref4}
            className={`col-start-2 col-end-5 row-span-6 mb-10 h-[60vh] rounded-md flex items-center justify-center text-nuto text-3xl ${
                inView4 ? "visible" : ""
            }`}
            >
            <img
                src={"/imgs/img2.jpg"}
                alt="Image 2"
                className="object-cover w-auto h-auto mt-10 border-4 shadow-xl shadow-black"
            />
        </div>
        <div
            ref={ref3}
            className={`col-start-6 col-end-9  mt-10 row-span-6 bg-nutb h-[60vh] rounded-md flex flex-col items-start justify-start p-6 fade-in-right ${
                inView3 ? "visible" : ""
            }`}
            >
                <h1 className="text-lbl text-5xl mb-10">
                    Fresh & Local Fruit
                </h1>

                <h2 className="text-background text-lg text-start w-[20vw] mb-6">
                    Hand-picked by Kimberly or purchased at local farms that grow the fruit. 
                    Turned into jam on the same or next day.
                </h2>
        </div>
    </div>
  );
}
