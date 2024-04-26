import { t } from "i18next";
import type { NextPage } from "next";
import Image from "next/image";

import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import GlobeAmericasIcon from "@/assets/icons/heroicons/globe-americas.svg";
import HeartIcon from "@/assets/icons/heroicons/heart.svg";
import FeatureCard from "@/components/data/FeatureCard";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";
import { useAfdianSponsors } from "@/lib/service/afdian";

const HIDDEN_USERS = [49699333]; // dependabot

const Sponsor: NextPage = () => {
  const { data: sponsors } = useAfdianSponsors();
  return (
    <>
      <SEO
        title={t("title.sponsor")}
        description="没有贡献者，我们的项目就不可能实现。了解您可以如何提供帮助。"
        keywords={[
          "luminolmc",
          "luminol",
          "minecraft",
          "sponsor",
          "contributing",
        ]}
      />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            {t("sponsor.title")}
          </h1>
          <p className="text-xl mt-4">{t("sponsor.description")}</p>
          <div className="flex flex-row gap-4 mt-8">
            {/* <p className="text-xl mt-4 text-red-300">{t("sponsor.nothing")}</p> */}
            <Button
              variant="filled"
              href="https://afdian.net/a/Luminol"
              external
            >
              爱发电
            </Button>
            <Button
              variant="outlined"
              href="https://patreon.com/LuminolMC"
              external
            >
              Patreon
            </Button>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end"></div>
      </header>
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-luminol-color-100 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto py-2">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            {t("sponsor.why.title")}
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={GlobeAmericasIcon}
              label={t("sponsor.why.reason.1.label")}
              description={t("sponsor.why.reason.1.description")}
            />
            <FeatureCard
              icon={BoltIcon}
              label={t("sponsor.why.reason.2.label")}
              description={t("sponsor.why.reason.2.description")}
            />
            <FeatureCard
              icon={HeartIcon}
              label={t("sponsor.why.reason.3.label")}
              description={t("sponsor.why.reason.3.description")}
            />
          </div>
        </div>
      </section>
      <section id="sponsors" className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-medium mb-2">{t("sponsor.sponsors")}</h2>
        <div className="grid grid-cols-8 md:grid-cols-16 lg:grid-cols-18 xl:grid-cols-20 mt-8 gap-2">
          {sponsors?.map((page) =>
            page
              .filter((sponsors) => !HIDDEN_USERS.includes(sponsors.id))
              .map((sponsors) => (
                <a
                  role="button"
                  className="relative rounded-full aspect-square bg-gray-600 flex items-center justify-center text-white font-bold uppercase overflow-auto transition-transform transform hover:(scale-120 shadow-lg)"
                  href={`https://github.com/${sponsors.login}`}
                  rel="noreferrer"
                  target="_blank"
                  key={sponsors.id}
                >
                  {sponsors.login[0]}
                  <Image
                    alt={`${sponsors.login}${t("team.avatar")}`}
                    src={sponsors.avatar_url}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    onLoad={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                    unoptimized
                    fill
                    className="object-cover"
                  />
                </a>
              )),
          )}
        </div>
      </section>
    </>
  );
};

// TODO: Add 爱发电 sponsors & Patreon sponsors
export default Sponsor;
