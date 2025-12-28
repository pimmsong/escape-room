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
  const isSpamPage = location.pathname === "/spam" || location.pathname === "/inbox";

  return (
    <div className="flex flex-col w-[224px] border-r-2">
      {/* 🔹 메뉴 영역 */}
      <ul className="flex flex-col gap-2 pt-3.5 flex-1">
        {MENUS.map((menu) => {
          const isActive = location.pathname === menu.path;

          return (
            <li key={menu.name}>
              <div
                className={`px-6 py-2 text-[21px] ${
                  isActive ? "text-black font-bold" : "text-gray"
                }`}
              >
                {menu.path ? (
                  <Link to={menu.path} className="flex items-center gap-2">
                    <menu.icon
                      className={`${
                        isActive ? "text-black" : "text-gray"
                      } mt-0.5`}
                    />
                    {menu.name}
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 cursor-default">
                    <menu.icon className="mt-0.5" /> {menu.name}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {/* 🔹 스팸메일함 하단 HINT (테두리 바로 위) */}
      {isSpamPage && (
        <div className="px-6 pb-4 pt-2 border-t text-[15px] font-bold text-black tracking-wide">
          HINT CODE : 1004
        </div>
      )}
    </div>
  );
}
