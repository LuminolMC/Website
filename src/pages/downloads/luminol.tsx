import { t } from "i18next";
import type { ReactElement } from "react";

import LuminolIcon from "@/assets/brand/luminol.svg";
import SoftwareDownload from "@/components/layout/SoftwareDownload";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const LuminolDownloads = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title={t("title.downloads.luminol")}
        description="下载 Luminol 服务端"
        keywords={[
          "luminolmc",
          "minecraft",
          "folia",
          "luminol",
          "downloads",
          "jar",
        ]}
      />
      <SoftwareDownload
        id="luminol"
        project={project}
        icon={LuminolIcon}
        description={t("downloads.luminol.description")}
        experimentalWarning={t("downloads.luminol.experimentalWarning")}
      />
    </>
  );
};

export default LuminolDownloads;

export const getStaticProps = getProjectProps("luminol");
