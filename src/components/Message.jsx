import TelegramIcon from "@mui/icons-material/Telegram";
export default function Message({
  selectedUserId,
  newMessageText,
  setNewMessageText,
  sendMessage,
  messages,
  messagesWithoutDupes,
}) {
  return (
    <>
      <div className=" absolute left-[300px] flex flex-col bg-[#1b1b1b]  h-[555px] w-[1050px] p-2 mt-24 rounded-lg">
        <div className="flex-grow flex -top-8 relative ">
          {!selectedUserId && (
            <div className="text-gray-400 items-center justify-center h-full">
              &larr; Select a person from the sidebar
            </div>
          )}

          {!!selectedUserId && (
            <div className=" items-start">
              {messagesWithoutDupes.map((message, index) => (
                <div className="relative top-10 text-white" key={index}>
                  {message.text}
                </div>
              ))}
            </div>
          )}
        </div>
        {!!selectedUserId && (
          <form className="flex gap-2 mx-2" onSubmit={sendMessage}>
            <input
              type="text "
              value={newMessageText}
              onChange={(ev) => setNewMessageText(ev.target.value)}
              className="bg-[#292929] flex-grow border py-2  h-[38px] text-sm pl-2 text-white"
              placeholder="type a message ..."
            />
            <button className=" text-gray-600" type="submit">
              <div className="w-full h-6  text-[#ffa31a]">
                <TelegramIcon />
              </div>
            </button>
          </form>
        )}
      </div>
    </>
  );
}
