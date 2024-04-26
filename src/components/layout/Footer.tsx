import clsx from "clsx";
import { t } from "i18next";
import Link from "next/link";

import Logo from "@/assets/brand/logo.svg";
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
            {/* <li>
              <a href="https://docs.luminolmc.com" target="_blank">
                {t("components.layout.Footer.getting_started.documentation")}
              </a>
            </li>
            <li>
              <a href="https://repo.luminolmc.com" target="_blank">
                Javadocs
              </a>
            </li> */}
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
            {t("components.layout.Footer.terms.title")}
          </span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              {/* <Link href="/community/guidelines">
                {t("components.layout.Footer.terms.community_guidelines")}
              </Link> */}
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
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
