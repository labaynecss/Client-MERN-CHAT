import Avatar from './Avatar.jsx';

export default function Contact({ id, username, onClick, selected, online }) {
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className={
        ' flex items-center  h-[80px] cursor-pointer border-t border-[#373636]  ' +
        (selected ? 'bg-[#808080]' : '')
      }>
      {selected && (
        <div className="w-1 bg-[#ffa31a] h-[80px] rounded-r-md"></div>
      )}
      <div className="flex gap-2 py-2 pl-2 items-center">
        <Avatar online={online} username={username} userId={id} />
        <span className="text-white">{username}</span>
      </div>
    </div>
  );
}
