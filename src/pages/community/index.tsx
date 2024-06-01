import { t } from "i18next";
import type { NextPage } from "next";

import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const CommunityIndex: NextPage = () => (
  <>
    <SEO
      title={t("title.community.index")}
      description="我们很高兴您成为LuminolMC社区的一员！"
      keywords={["luminolmc", "luminol", "minecraft", "sponsor", "community"]}
    />
    <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
      <div className="flex-1">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          {t("community.index.title")}
        </h1>
        <p className="text-xl mt-4">{t("community.index.description")}</p>
        <div className="flex flex-row gap-4 mt-8">
          <Button variant="filled" href="/community/guidelines" dense>
            {t("community.index.button.guidelines")}
          </Button>
        </div>
      </div>
      <div className="flex-1 lg:flex hidden justify-end"></div>
    </header>
    <section
      id="qq"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">
          {t("community.index.qq.title")}
        </h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("community.index.qq.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MfosKhcDd8Fdxn1MREuZ8Krbf9T6jiBC&authKey=3cm6qdHohON3gHnuD63FK4k07fIbrWnY4hdyq8OmELsfjMVP1kbFTJY9mRyM2Rkj&noverify=0&group_code=368632360"
            external
            dense
          >
            {t("community.index.button.qq")}
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)"></div>
    </section>
    <section
      id="discord"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row pt-16"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">Discord</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("community.index.discord.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://discord.gg/Qd7m3V6eDx"
            external
            dense
          >
            {t("community.index.button.discord")}
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)"></div>
    </section>
    <section
      id="giscus"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">GitHub Discussions</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("community.index.giscus.description")}
        </p>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)"></div>
    </section>
  </>
);

export default CommunityIndex;
