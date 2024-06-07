export default function Statements({ number, text }) {
  return (
    <div className="flex items-center flex-col lg:flex-row">
      <div>
        <p className="text-[#F2F2F2] text-[200px] font-[900]">{number}</p>
      </div>
      <div className="w-full lg:w-[279px]"> 
        <p className="text-[22px] text-[#333333] text-center lg:text-left">{text}</p>
      </div>
    </div>
  );
}
