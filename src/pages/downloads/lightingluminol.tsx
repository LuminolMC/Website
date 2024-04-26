import { t } from "i18next";
import type { ReactElement } from "react";

import LightingLuminolIcon from "@/assets/brand/lightingluminol.svg";
import SoftwareDownload from "@/components/layout/SoftwareDownload";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const LuminolDownloads = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title={t("title.downloads.luminol")}
        description="下载 LightingLuminol 服务端"
        keywords={[
          "luminolmc",
          "minecraft",
          "folia",
          "lightingluminol",
          "downloads",
          "jar",
        ]}
      />
      <SoftwareDownload
        id="lightingluminol"
        project={project}
        icon={LightingLuminolIcon}
        description={t("downloads.lightingluminol.description")}
        experimentalWarning={t("downloads.lightingluminol.experimentalWarning")}
      />
    </>
  );
};

export default LuminolDownloads;

export const getStaticProps = getProjectProps("lightingluminol");
