import { t } from "i18next";
import type { ReactElement } from "react";

import LuminolIcon from "@/assets/brand/luminol.svg";
import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import ChatBubbleLeftRightIcon from "@/assets/icons/heroicons/chat-bubble-left-right.svg";
import CodeBracketIcon from "@/assets/icons/heroicons/code-bracket.svg";
import FeatureCard from "@/components/data/FeatureCard";
import SoftwareHeader from "@/components/layout/SoftwareHeader";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const LuminolHome = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title="Luminol"
        description="Luminol is a Minecraft game server based on Paper, aimed at repairing broken vanilla properties."
        keywords={[
          "luminolmc",
          "luminol",
          "server",
          "minecraft",
          "vanilla",
          "spigot",
          "paper",
          "fork",
        ]}
      />
      <SoftwareHeader
        id="luminol"
        name="Luminol"
        versionGroup={project.latestVersionGroup}
        icon={LuminolIcon}
        header={
          <>
            {t("software.luminol.index.title.line1")}
            <br />
            <span className="text-luminol-color-500">
              {t("software.luminol.index.title.line2")}
            </span>
          </>
        }
        description={t("software.luminol.index.description")}
      />
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-luminol-color-100 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            {t("software.luminol.index.why.title")}
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={BoltIcon}
              label={t("software.luminol.index.why.reason.1.label")}
              description={t("software.luminol.index.why.reason.1.description")}
            />
            <FeatureCard
              icon={ChatBubbleLeftRightIcon}
              label={t("software.luminol.index.why.reason.2.label")}
              description={t("software.luminol.index.why.reason.2.description")}
            />
            <FeatureCard
              icon={CodeBracketIcon}
              label={t("software.luminol.index.why.reason.3.label")}
              description={t("software.luminol.index.why.reason.3.description")}
            />
          </div>
        </div>
      </section>
      {/* <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row-reverse gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={HomeImage}
              placeholder="blur"
              fill
              sizes="(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl break-all">
              {t("software.luminol.index.image.1.title")}
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              {t("software.luminol.index.image.1.description")}
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button variant="filled" href="/downloads/luminol" dense>
                {t("software.luminol.index.button.downloads")}
              </Button>
              <Button
                variant="outlined"
                href="https://docs.luminolmc.top/luminol/getting-started"
                external
                dense
              >
                {t("software.luminol.index.button.documentation")}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl aspect-video relative overflow-clip">
            <Image
              alt=""
              src={CommunityImage}
              placeholder="blur"
              fill
              sizes="(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl">
              {t("software.luminol.index.image.2.title")}
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              {t("software.luminol.index.image.2.description")}
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button
                variant="filled"
                href="https://discord.gg/5hgtU72w33"
                external
                dense
              >
                {t("software.luminol.index.button.discord")}
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

LuminolHome.softwareProps = {
  github: "https://github.com/LuminolMC/Luminol",
};

export default LuminolHome;

export const getStaticProps = getProjectProps("luminol");
