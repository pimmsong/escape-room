import { useLocation, Link } from "react-router-dom";
import MailIcon from "@assets/icons/icon_mail.svg?react";
import SendIcon from "@assets/icons/icon_send.svg?react";
import Filecon from "@assets/icons/icon_file.svg?react";
import SpamIcon from "@assets/icons/icon_spam.svg?react";

const MENUS = [
  { name: "받은메일함", path: "/inbox", icon: MailIcon },
  { name: "보낸메일함", icon: SendIcon },
  { name: "임시보관함", icon: Filecon },
  { name: "스팸메일함", path: "/spam", icon: SpamIcon },
];

export default function MailMenu() {
  const location = useLocation();

  return (
    <ul className="flex flex-col gap-2 pt-3.5 w-[224px] border-r-2">
      {MENUS.map((menu) => {
        const isActive = location.pathname === menu.path;

        return (
          <li
            key={menu.name}
            className={`px-6 py-2 text-[21px] ${
              isActive ? "text-black font-bold" : "text-gray"
            }`}
          >
            {menu.path ? (
              <Link to={menu.path} className="flex items-center gap-2">
                <menu.icon
                  className={`${isActive ? "text-black " : "text-gray"} mt-0.5`}
                />
                {menu.name}
              </Link>
            ) : (
              <span className="flex items-center gap-2 cursor-default">
                <menu.icon className="mt-0.5" /> {menu.name}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
