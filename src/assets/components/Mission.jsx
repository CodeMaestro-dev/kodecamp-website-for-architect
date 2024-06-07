import Statements from "./Statements";

export default function Mission() {
  return (
    <div className="mt-[120px]">
      <h2 className="text-[#BDBDBD] text-[48px] lg:text-[64px] font-[300]">Main Focus / Mission Statement</h2>
      <div className="flex gap-[30px] lg:gap-[187px] flex-col lg:flex-row">
      <Statements number="1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat."/>
      <Statements number="2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl."/>
      </div>
    </div>
  );
}
