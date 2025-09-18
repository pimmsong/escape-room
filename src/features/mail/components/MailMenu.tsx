import MailIcon from "@assets/icons/icon_mail.svg?react";
import SendIcon from "@assets/icons/icon_send.svg?react";
import Filecon from "@assets/icons/icon_file.svg?react";
import BanIcon from "@assets/icons/icon_ban.svg?react";

const MENUS = [
  { name: "받은메일함", path: "/inbox", icon: <MailIcon /> },
  { name: "보낸메일함", icon: <SendIcon /> },
  { name: "임시보관함", icon: <Filecon /> },
  { name: "스팸메일함", path: "/spam", icon: <BanIcon /> },
];

export default function MailMenu() {
  return (
    <ul className="flex flex-col gap-2 pt-3.5 w-[224px] border-r-2">
      {MENUS.map((menu) => (
        <li key={menu.name} className="px-6 py-2 text-[21px]">
          {menu.path ? (
            <a href={menu.path} className="flex items-center gap-2 text-gray">
              {menu.icon}
              {menu.name}
            </a>
          ) : (
            <span className="flex items-center gap-2 text-gray cursor-default">
              {menu.icon} {menu.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
