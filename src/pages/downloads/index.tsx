import { t } from "i18next";
import type { NextPage } from "next";

import LightingLuminolIcon from "@/assets/brand/lightingluminol.svg";
import LuminolIcon from "@/assets/brand/luminol.svg";
import SoftwarePreview from "@/components/data/SoftwarePreview";
import SEO from "@/components/util/SEO";

const Downloads: NextPage = () => {
  return (
    <>
      <SEO
        title={t("title.downloads.index")}
        description="查找并下载LuminolMC的项目"
        keywords={["luminolmc", "minecraft", "folia", "luminol", "downloads"]}
      />
      <header className="max-w-4xl flex flex-col items-center mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-26) gap-2">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          {t("downloads.index.title")}
        </h1>
        <p className="text-xl text-center mb-6">
          {t("downloads.index.description")}
        </p>
        <div className="grid md:grid-cols-2 gap-2 px-2 xl:gap-4">
          <SoftwarePreview
            id="luminol"
            name="Luminol"
            icon={LuminolIcon}
            description={t("downloads.index.softwares.luminol.description")}
            download
          />
          <SoftwarePreview
            id="lightingluminol"
            name="LightingLuminol"
            icon={LightingLuminolIcon}
            description={t(
              "downloads.index.softwares.lightingluminol.description",
            )}
            download
          />
        </div>
      </header>
    </>
  );
};

export default Downloads;
