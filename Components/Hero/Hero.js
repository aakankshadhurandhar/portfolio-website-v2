import React from "react";
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
  return (
    <main>
      <div className="flex flex-col ">
        <div className=" flex flex-row justify-between ">
          <div className="flex flex-col ">
            <div className="mt-10 ml-14">
              <span className={styles.wave}>👋</span>
              <span className="font-bold text-3xl ">Hi,I am Aakanksha</span>
            </div>

            <div className="ml-20 ">
              💻 I convert your designs into Webapps{" "}
            </div>
            <div className="flex flex-row mt-6 ml-20 ">
              <a
                href="https://github.com/aakankshadhurandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3 mt-1"
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
                href="https://twitter.com/AakankshaDhura1"
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
                  height={12}
                  width={12}
                  alt="hashnodeicon"
                  className=" p-0 m-0"
                />
              </a>
            </div>
          </div>

          <div className=" ">
            <div className=" ">
              <Image
                src={HeroImg}
                height={210}
                width={280}
                alt="heroimg"
                className={styles.heroimg}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
