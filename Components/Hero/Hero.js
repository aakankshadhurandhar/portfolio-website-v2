import React, { useRef } from "react";
import Image from "next/image";
import HeroImg from "./Hero.svg";
import HashnodeIcon from "./hashnode.svg";
import styles from "./Hero.module.css";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

function Hero() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <main>
      <div className="container flex flex-wrap mx-auto ">
        <div class=" flex flex-col sm:flex-row md:flex-row ">
          <div>
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://assets2.lottiefiles.com/packages/lf20_lcsx30ez.json"
              style={{ width: "300px", height: "300px" }}
            ></lottie-player>
          </div>

          <div className="flex flex-col lg:ml-80 xl:ml-100 ">
            <div className="mt-8 ml-14">
              <span className={styles.wave}>👋</span>
              <span className="font-bold text-4xl ">Hi,I am Aakanksha</span>
            </div>

            <div className="ml-14 text-xl">
              💻 I convert your designs into Webapps{" "}
            </div>
            <div className="flex flex-row mt-6 ml-20 text-xl">
              <a
                href="https://github.com/aakankshadhurandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3 mt-1 "
              >
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aakankshadhurandhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3 mt-1"
              >
                <AiOutlineLinkedin />
              </a>
              <a
                href="https://twitter.com/Aakudhurandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3 mt-1"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://aakankshadhurandhar.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={HashnodeIcon}
                  height={15}
                  width={15}
                  alt="hashnodeicon"
                />
              </a>

              <button className="h-9 px-3 ml-7 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
