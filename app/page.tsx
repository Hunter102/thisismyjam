"use client";

import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedGrid from "./components/AnimatedGrid";
import Testimonial from "./components/Testimonial";

export default function Home() {

  return (
    <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-bl">
      <Header/>
      
      <main className="relative w-full z-10 main-content">
        <div className="grid xl:grid-rows-[18%_auto] w-full h-full">
          <div className="grid justify-items-center">
            <img
              src={"/imgs/jam.jpg"}
              alt="Jam Image"
              className="object-cover w-[70vw] h-[16vh] xl:h-[50vh] sm:h-[50vh] mt-10 border-4 border-white shadow-xl shadow-white"
            />
            <div className="grid xl:grid-cols-9 xl:grid-rows-1 items-center gap-10 xl:mt-20 xl:mb-20 p-8 sm:p-8 sm:mb-20 xl:p-0 text-center justify-center">
              <div className="xl:col-start-2 xl:col-end-9 grid justify-items-center">
                <h2 className="text-4xl text-lbl mb-4 mt-10">
                  THIS IS MY JAM - IT IS WHAT I LOVE TO DO!
                </h2>
                <h2 className="text-background xl:text-lg text-md text-center w-auto">
                  {"Some people have hobbies like painting, running, cooking. Me - I like to jam. While it mostly happens over the summer and into the fall, that works for me since I work at a school. I've been jamming for over 25 years. I switched to a low-sugar recipe in the last couple of years - best decision ever! I pick most of the fruit (with my husband's help and sometimes my children). When picking is not an option the fruit is purchased at local farms who grow the fruit"}.
                </h2>
                <Link href="/products">
                  <button
                    className="flex items-center justify-center text-center text-xl w-44 mt-20 h-20 bg-lbl text-foreground rounded-full shadow-lg shadow-foreground hover:scale-105"
                  >
                    {"Let's Jam!"}
                  </button>
                </Link>
              </div>

              <img
                src={"/imgs/mom.jpg"}
                alt="Jam Image"
                className="object-cover w-[30vw] hidden h-[30vh] rounded-full mr-20 border-4 shadow-xl shadow-black"
              />
            </div>
          </div>

          <AnimatedGrid/>

          <img
              src={"/imgs/img3.jpg"}
              alt="Image 3"
              className="w-full h-full"
          />

          {/* SECTION 2  */}
          <div className="grid xl:grid-cols-9 xl:grid-rows-2 xl:mt-20 w-full p-4 bg-bl xl:mb-12 text-center">
            <div className={`xl:col-start-2 xl:col-end-9 xl:row-span-3 rounded-md flex flex-col items-center justify-center`}>
                <h1 className="text-lbl xl:text-5xl text-3xl mb-6">
                  WHERE TO FIND THIS IS MY JAM
                </h1>

                <h2 className="text-background xl:text-lg text-sm text-center mb-10 grid grid-rows-2 gap-10">
                    <h1>Check out where you can find This Is My Jam at craft & vendor fairs in MA & NH</h1>
                    <h1>You will never want to eat another store-bought jam!</h1>
                </h2>

                <img
                  src={"/imgs/fair1.jpg"}
                  alt="Image 3"
                  className="w-auto h-auto border-4 shadow-xl shadow-black"
                />
            </div> 
          </div>

          <img
              src={"/imgs/img3.jpg"}
              alt="Image 3"
              className="w-full h-full"
          />

          <div className="grid xl:grid-cols-9 xl:grid-rows-3 w-full p-4 bg-bl">            
            <div className={`col-start-2 col-end-9 row-span-1 rounded-md flex flex-col items-center justify-center`}>
                <h1 className="text-lbl xl:text-5xl text-3xl">
                  INGREDIENTS
                </h1>

                <h2 className="text-background xl:text-lg text-sm xl:text-start text-center grid justify-items-center grid-rows-2 gap-10 xl:mt-10">
                    <h1>Handpicked fruit from local farms, sugar, Low Sugar Sure Jell (dextrose, fruit pectin, fumaric acid, sodium citrate), butter (minuscule).</h1>
                    <h1>This product is exempt from licensing and inspection</h1>
                </h2>
            </div> 

            <div
              className={`col-start-2 col-end-9 row-span-2 mt-20 rounded-md flex flex-col items-center justify-center`}
            >
              <h1 className="text-lbl xl:text-5xl text-3xl mb-8">TESTIMONIALS</h1>
              <div className="grid xl:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6 w-full"
                style={{
                  gridAutoRows: 'minmax(0, auto)',
                  alignItems: 'start',
                }}
                >
                <Testimonial
                  text="“Kimberly's jams are delicious and substantive. You know you're getting tons of real fruit, and the texture is smooth and delicate.” "
                  date="EBC, 2022"
                />
                <Testimonial
                  text="“Kimberly has this magical ability to turn fruit into a special treat. We always love when we get her jam! The problem is that it's so good, we fight over who gets the last spoonful!”"
                  date="CP, 2019"
                />
                <Testimonial
                  text="“Compact and easy. I just got some of KP's blue raspberry jam - it was delicious. You can actually taste the fruit. Unlike so much jam and jelly where you only really taste the sweet of sugar.”  "
                  date="JT, 2020"
                />
                <Testimonial
                  text="“Apple pie jam on buttermilk pancakes = Sunday morning perfection!! Thank you so much, Kimberly!!”"
                  date="KE, 2021"
                />
                <Testimonial
                  text="“We LOVE Kimberly's jams! We put it on everything! And when I say everything, I mean just about everything but the kitchen sink, and I mean that because the jar is completely licked clean before it even gets to the sink! We love the raspberry and blueberry jams on classic PB&J's. We have also added it to cheese to add a hint of sweetness for a snack. Our favorite is the apple pie jam. It is out-of-this-world amazingly delicious! We put it on pancakes, French toast, crackers, or spoon it right out of the jar. Hands down our fav!”"
                  date="KS, 2020"
                />
              </div>
            </div>
          </div>

          {/* <img
              src={"/imgs/img3.jpg"}
              alt="Image 3"
              className="w-full h-full"
          /> */}

          <div className="grid grid-cols-2 grid-rows-[40%_auto] p-4 mb-32 items-center justify-items-center">
            <div className="justify-items-center">
              <h2 className="xl:text-5xl text-xl text-lbl mb-4">Follow Me</h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.instagram.com/thisismyjamkimberlyskitchen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center xl:text-xl text-sm text-background hover:text-lbl"
                  >
                    <img
                      src="/imgs/instagram.jpg"
                      alt="Instagram"
                      className="w-6 h-6 mr-2 rounded-lg"
                    />
                    Instagram
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg text-background hover:text-lbl"
                  >
                    <img
                      src="/imgs/facebook.jpg"
                      alt="Facebook"
                      className="w-6 h-6 mr-2"
                    />
                    Facebook
                  </a>
                </li> */}
              </ul>
            </div>


            <div className="col-start-1 row-start-1 items-center justify-items-center">
              <h2 className="xl:text-5xl text-xl text-lbl mb-4">Contact Me</h2>
              <a
                  href="mailto:Kimberly@thepoulinfamily.com"
                  className="text-white hover:text-lbl underline xl:text-xl text-xs"
                >
                  Kimberly@thepoulinfamily.com
              </a>
            </div>
            
            <img
              src={"/imgs/farm.jpg"}
              alt="Image 3"
              className="xl:h-[50vh] xl:w-[35vw] sm:h-[45vh] sm:w-[40vw] h-[30vh] w-[70vw] mb-32 border-4 shadow-xl shadow-black col-span-2"
            />
          </div>

          <Footer/>
        </div>
      </main>
    </div>
  );
}
