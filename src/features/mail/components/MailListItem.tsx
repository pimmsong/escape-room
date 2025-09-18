import Checkbox from "@shared/ui/Checkbox";

export default function MailListItem() {
  return (
    <li className="flex items-center px-5 py-3 border-b-2 justify-between">
      <div className="flex items-center">
        <div className="relative inline-block top-0.5">
          <Checkbox id="custom-check" />
        </div>
        <span className="ml-5 text-[21px]">Papaa</span>
        <h4 className="ml-14 text-[21px] pretendard">
          안녕하세요. 롯데캐스트입니다.
        </h4>
      </div>
      <span className="pretendard text-brown">2023-06-01</span>
    </li>
  );
}
