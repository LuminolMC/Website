import clsx from "clsx";
import { t } from "i18next";
import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Logo from "@/assets/brand/logo.svg";
import DiscordIcon from "@/assets/icons/fontawesome/discord-brands.svg";
import GitHubIcon from "@/assets/icons/fontawesome/github-brands.svg";
import QQIcon from "@/assets/icons/fontawesome/qq.svg";
import ExternalUrlIcon from "@/assets/icons/heroicons/arrow-top-right-on-square.svg";
import MenuIcon from "@/assets/icons/heroicons/menu.svg";
import IconButton from "@/components/input/IconButton";
import NavDropDown from "@/components/layout/NavDropDown";
import NavDropDownLink from "@/components/layout/NavDropDownLink";
import NavLink from "@/components/layout/NavLink";
import type { PageSoftwareProps } from "@/lib/util/types";

export interface NavBarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: NextComponentType<NextPageContext, any, any>;
}

const NavBar = ({ component }: NavBarProps) => {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const softwareProps: PageSoftwareProps | undefined = (component as any)[
    "softwareProps"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScroll]);

  useEffect(() => {
    setShowMenu(false);
  }, [router.route]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-shadow",
        scroll && "bg-background-light-10 dark:bg-background-dark-90 shadow-xl",
      )}
    >
      <div className="max-w-7xl flex flex-row items-center mx-auto px-4 py-2 gap-2">
        <button
          title={t("components.layout.NavBar.toggle")}
          className="leading-0 mr-2 md:hidden"
          onClick={() => setShowMenu((show) => !show)}
        >
          <MenuIcon className="w-6 h-6 fill-gray-500" />
        </button>
        <Link href="/" className="leading-0" tabIndex={-1} aria-hidden={true}>
          <Logo className="h-8 cursor-pointer" alt="LuminolMC" />
        </Link>
        <div
          className={clsx(
            "absolute top-full left-0 right-0 flex flex-col bg-background-light-10 dark:bg-background-dark-90 gap-4 p-4 shadow-xl w-full md:(block relative w-auto shadow-none bg-transparent p-0)",
            !showMenu && "hidden",
          )}
        >
          <NavDropDown label={t("components.layout.NavBar.software")}>
            <NavDropDownLink href="/software/Luminol">Luminol</NavDropDownLink>
            <NavDropDownLink href="/software/LightingLuminol">
              LightingLuminol
            </NavDropDownLink>
          </NavDropDown>
          {
            <NavLink
              href="https://docs.luminolmc.com/zh_Hans/"
              target="_blank"
              className="inline-flex items-center"
            >
              {t("components.layout.NavBar.documentation")}
              <ExternalUrlIcon className="h-4 w-4 ml-1 align-sub" />
            </NavLink>
          }
          <NavLink href="/team">{t("components.layout.NavBar.team")}</NavLink>
          <NavLink href="/contribute">
            {t("components.layout.NavBar.contribute")}
          </NavLink>
        </div>

        <div className="flex-grow" />
        {/* <NavDropDown label={t("Language")}>
          <NavDropDownLink
            href=""
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            English
          </NavDropDownLink>
          <NavDropDownLink
            href=""
            onClick={() => {
              i18n.changeLanguage("zh-CN");
            }}
          >
            简体中文
          </NavDropDownLink>
        </NavDropDown> */}
        <IconButton
          icon={GitHubIcon}
          label="GitHub"
          href={softwareProps?.github || "https://github.com/LuminolMC"}
          external
        />
        <IconButton
          icon={QQIcon}
          label="QQ"
          href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MfosKhcDd8Fdxn1MREuZ8Krbf9T6jiBC&authKey=3cm6qdHohON3gHnuD63FK4k07fIbrWnY4hdyq8OmELsfjMVP1kbFTJY9mRyM2Rkj&noverify=0&group_code=368632360"
          external
        />
        <IconButton
          icon={DiscordIcon}
          label="Discord"
          href="https://discord.gg/Qd7m3V6eDx"
          external
        />
      </div>
    </nav>
  );
};

export default NavBar;
