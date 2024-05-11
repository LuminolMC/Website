import clsx from "clsx";
import { t } from "i18next";
import Link from "next/link";

import Logo from "@/assets/brand/logo.svg";
import ExternalUrlIcon from "@/assets/icons/heroicons/arrow-top-right-on-square.svg";
import NavLink from "@/components/layout/NavLink";
import classes from "@/styles/components/layout/Footer.module.css";

const Footer = () => (
  <footer className={clsx("bg-background-dark-80 py-12 mt-8", classes.footer)}>
    <div className="max-w-7xl m-auto px-4">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm text-white">
        <div>
          <span className="font-semibold">
            {t("components.layout.Footer.getting_started.title")}
          </span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/downloads">
                {t("components.layout.Footer.getting_started.downloads")}
              </Link>
            </li>
            {
              <li>
                <a href="https://docs.luminolmc.com/zh_Hans/" target="_blank">
                  {t("components.layout.Footer.getting_started.documentation")}
                </a>
              </li>
              /*<li>
              <a href="https://repo.luminolmc.com" target="_blank">
                Javadocs
              </a>
            </li> */
            }
          </ul>
        </div>
        <div>
          <span className="font-semibold">
            {t("components.layout.Footer.community.title")}
          </span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/community">
                {t("components.layout.Footer.community.our_community")}
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/LuminolMC"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/8GKSUNw9"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">LuminolMC</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/team">
                {t("components.layout.Footer.LuminolMC.our_team")}
              </Link>
            </li>
            <li>
              <Link href="/contribute">
                {t("components.layout.Footer.LuminolMC.contribute")}
              </Link>
            </li>
            <li>
              <Link href="/sponsor">
                {t("components.layout.Footer.LuminolMC.sponsor")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">
            {t("components.layout.Footer.links.title")}
          </span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <NavLink
                href="http://status.lolicon.fit/"
                target="_blank"
                className="inline-flex items-center"
              >
                {t("components.layout.Footer.links.service_status")}
                <ExternalUrlIcon className="h-4 w-4 ml-1 align-sub" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 border-t border-gray-600/50 mt-8 pt-10">
        <Logo className="h-12 cursor-pointer" alt="LuminolMC" />
        <div className="flex-1" />
        <span className="text-gray-300 text-sm" style={{ textAlign: "right" }}>
          © {new Date().getFullYear()}{" "}
          {t("components.layout.Footer.copyright")}
          <br />
          <Link href="https://icp.gov.moe/?keyword=20242008" target="_blank">
            萌ICP备20242008号
          </Link>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
