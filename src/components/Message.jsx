export default function Message() {
  return (
    <>
      <div className=" absolute left-[300px] flex flex-col bg-blue-50 h-[555px] w-[1050px] p-2 mt-24 rounded-lg">
        <div className="flex-grow -top-8 relative text-gray-700"></div>
        <div className="flex gap-2 mx-2">
          <input
            type="text "
            className="bg-white flex-grow border p-2 rounded-md h-auto"
            placeholder="type a message ..."
          />
          <button className=" text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-6 rounded-full bg-red-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
