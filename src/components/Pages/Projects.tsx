import TextifyBanner from "/Textify/dark.png";
import TextifyLogo from "/Textify/logo.png";
import BeatuneBanner1 from "/Beatune/1.png";
import BeatuneBanner2 from "/Beatune/2.png";
import BeatuneBanner3 from "/Beatune/3.png";
import Thunder from "/thunder.svg";
import BeatuneLogo from "/Beatune/logo.svg";

import { motion } from "framer-motion";
import { Card } from "../Card";
import { Card as HoverCard, Grid } from "../Grid";
import { Textify } from "../Textify";
import { BoxCircle } from "../Circle";
import { SquareFrame } from "../SquareFrame";
import { ScrollGrid, TimerCard } from "../ScrollGrid";
import { FaMicrophoneAlt, FaPoll } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { ImFilesEmpty } from "react-icons/im";
import { MdDownloading } from "react-icons/md";
import { LampContainer } from "../Lamp";
import BeatunePlayer from "../Beatune";
import { Badge } from "../Badge";

const once = true;

export const ProjectSection: React.FC = () => {
  return (
    <div id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once }}
        className="relative text-7xl z-[52] w-fit mx-auto font-semibold text-center text-shadow"
      >
        Portfolio Projects
      </motion.h1>
      <TextifySection />
      <BeatuneSection />
    </div>
  );
};

const TextifySection: React.FC = () => {
  return (
    <div className="relative p-5 w-full min-h-screen z-[51]">
      <div className="absolute z-50 size-full bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,_rgba(49,_191,_217,_0.15),_transparent)]"></div>
      <LampContainer
        className="my-7 flex-center gap-3"
        main="bg-cyan-500"
        secondary="bg-cyan-400"
        leftConic="from-cyan-500"
        rightConic="to-cyan-500"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeIn", delay: 0.8 }}
          viewport={{ once }}
          className="flex-center gap-3 mb-16"
        >
          <SquareFrame image={TextifyLogo} />
          <div>
            <div className="flex justify-center items-center gap-3">
              <h2 className="text-4xl text-copy-dark font-semibold">
                Web Chat Application
              </h2>
              <Badge text="Beta" className="text-sm self-start px-3 py-1" />
            </div>
            <h1 className="bg-gradient-to-br from-cyan-400 to-blue-700 text-7xl font-semibold bg-clip-text text-transparent">
              Textify
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.8 }}
          viewport={{ once }}
          className="max-w-[1170px] max-lg:max-w-[90vw] mx-auto pt-2 w-full"
        >
          <ScrollGrid>
            <TimerCard
              badge
              icon={PiPhoneCallFill}
              title="Video & Audio Call Conference"
              description="Users can start a video and audio call conference in private/group chat, and share their screen and mute themself."
            />
            <TimerCard
              icon={FaMicrophoneAlt}
              title="Voice Messages"
              description="The abilty to record yourself and send it as a message, to save you some time from typing."
            />
            <TimerCard
              icon={ImFilesEmpty}
              title="Upload & Share Files"
              description="Textify support all the possible file types (mp3, mp4, png, jpeg, pdf...), and users can share and send them between each other."
            />
            <TimerCard
              badge
              icon={FaPoll}
              title="Message Polls"
              description="Real time message polls to make you and your friends more organized, and make the right decision much easier."
            />
            <TimerCard
              icon={MdDownloading}
              title="Fast Load"
              description="While entring chat the application only load 10 messages at a time for fast performance and lower waiting time."
            />
          </ScrollGrid>
          <Grid className="mt-10 w-full h-[500px] grid-cols-3 max-lg:grid-cols-1 max-lg:min-h-[120vh]">
            <HoverCard lineBorder={false} style="dark:bg-[#050D1D]">
              <Card
                description="WhatsApp-inspired web application, for users to talk to each other or in groups, send messages, files, voice message and more..."
                image={TextifyBanner}
                logo={TextifyLogo}
                bg="#050D1D"
                title="Web Chat Application"
                projectName="Textify"
                primaryColor="#4ae9f6"
                href="https://textify-web.vercel.app/auth/login"
                github="https://github.com/BenDayan123/Textify"
                secondaryColor="#4fa5f6"
              />
            </HoverCard>
            <HoverCard className="lg:col-span-2" style="dark:bg-[#050D1D]">
              <div className="space-y-8 scale-75 -translate-y-24 transition-all">
                <Textify />
                <h1 className="text-3xl transition-all dark:text-copy-dark font-semibold text-center">
                  Simple. Fast. Well Designed.
                </h1>
              </div>
            </HoverCard>
          </Grid>
        </motion.div>
      </LampContainer>
    </div>
  );
};

const BeatuneSection: React.FC = () => {
  return (
    <div className="relative size-full">
      <div className="absolute z-50 size-full bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,_rgba(180,_112,_243,_0.15),_transparent)]"></div>
      <LampContainer>
        <div className="space-y-16 w-[90%]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeIn", delay: 0.8 }}
            viewport={{ once }}
            className="my-7 flex-center gap-3"
          >
            <SquareFrame circle image={BeatuneLogo} />
            <div>
              <h2 className="text-5xl font-semibold text-shadow">
                Desktop Music App
              </h2>
              <h1 className="bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-7xl font-semibold bg-clip-text text-transparent">
                Beatune
              </h1>
            </div>
          </motion.div>
          <BeatunePlayer />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once }}
          >
            <Grid className="grid grid-cols-3 h-[1000px] max-lg:h-[2030px] mx-auto grid-rows-2 place-items-center gap-6 max-lg:grid-rows-4 max-lg:grid-cols-1">
              <div className="lg:col-span-2 relative size-full">
                <BoxCircle className="size-full rounded-[3rem]" />
                <h1 className="max-lg:hidden text-gray-100/90 font-semibold text-3xl w-2/3 text-center absolute left-1/2 -translate-x-1/2 bottom-7 z-50">
                  Built with the lastest and newest technologies
                </h1>
              </div>

              <HoverCard className="size-full rounded-[2rem] lg:col-span-1">
                <Card
                  description="Spotify-inspired application enables users to seamlessly search, listen to songs, and create playlists across major desktop platforms."
                  image={BeatuneBanner1}
                  logo={BeatuneLogo}
                  bg="#16132b"
                  title="Cross-Desktop Music Application"
                  href="https://beatune-website.vercel.app/"
                  projectName="Beatune 2.0"
                  github="https://github.com/BenDayan123/Beatune-2.0"
                  primaryColor="#11efe3"
                  secondaryColor="#96f"
                />
              </HoverCard>
              <HoverCard className="relative size-full rounded-[3rem] lg:col-span-1">
                <div className="size-full p-4 [background:radial-gradient(ellipse_at_center,_rgba(194,97,254,0.05),_transparent)]">
                  <img
                    alt="thunder"
                    src={Thunder}
                    className="aspect-auto scale-150 [mask-image:linear-gradient(black,_transparent_70%)]"
                  />
                  <div className="-translate-y-16 space-y-2">
                    <h1 className="text-white font-bold text-center text-2xl">
                      Lightning-Fast Performance
                    </h1>
                    <p className="text-gray-300 text-center text-balance font-medium text-base">
                      Experience music at the speed of thought with our
                      blazingly quick app.
                    </p>
                  </div>
                </div>
              </HoverCard>
              <HoverCard className="size-full rounded-[3rem] lg:col-span-2">
                <div className="relative p-10 size-full [background:radial-gradient(ellipse_at_center,_rgba(194,97,254,0.05),_transparent)]">
                  <h1 className="text-2xl text-white mb-3 font-semibold">
                    Unmatched Search & Lyrics
                  </h1>
                  <p className="text-white/70 text-lg">
                    Discover songs effortlessly with our powerful search engine,
                    and delve into their meaning with our extensive lyrics
                    database. a seamless music exploration.
                  </p>
                  <img
                    alt="BeatuneBanner3"
                    src={BeatuneBanner3}
                    className="group-hover/card:-translate-y-10 group-hover/card:-translate-x-24 duration-200 transition-transform [mask-image:linear-gradient(to_right,black,_transparent)] z-[5] backdrop-blur-lg  border border-white/20 absolute right-[5%] -bottom-24 rounded-xl w-[80%] mix-blend-screen aspect-auto h-auto"
                  />
                  <img
                    alt="BeatuneBanner2"
                    src={BeatuneBanner2}
                    className="group-hover/card:-translate-y-6 duration-200 transition-transform z-10 shadow-xl backdrop-blur-lg border [mask-image:linear-gradient(to_right,black,_transparent)] border-white/20 absolute isolate -right-[20%] -bottom-8 rounded-xl w-[80%] mix-blend-screen aspect-auto h-auto"
                  />
                </div>
              </HoverCard>
            </Grid>
          </motion.div>
        </div>
      </LampContainer>
    </div>
  );
};
