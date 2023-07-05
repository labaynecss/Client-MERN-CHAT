import TelegramIcon from '@mui/icons-material/Telegram';
export default function Message() {
  return (
    <>
      <div className=" absolute left-[300px] flex flex-col bg-[#151515]  h-[555px] w-[1050px] p-2 mt-24 rounded-lg">
        <div className="flex-grow -top-8 relative text-gray-700"></div>
        <div className="flex gap-2 mx-2">
          <input
            type="text "
            className="bg-[#292929] flex-grow border py-2  h-[38px] text-sm pl-2"
            placeholder="type a message ..."
          />
          <button className=" text-gray-600">
            <div className="w-full h-6  text-[#ffa31a]">
              <TelegramIcon />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
