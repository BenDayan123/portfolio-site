import { IconType } from "react-icons";
import { MdEmojiEmotions, MdSend, MdKeyboardVoice } from "react-icons/md";

export const Input: React.FC = () => {
  return (
    <div className="relative z-10 rounded-lg border-2 w-full h-16 flex items-center px-4 py-2 border-blue-400 bg-foreground-light dark:border-opacity-0 dark:bg-[#141718]">
      <Button icon={MdKeyboardVoice} />
      <input
        className="bg-transparent text-lg px-3 w-full outline-none text-black dark:text-white"
        placeholder="Type a message..."
      />
      <Button icon={MdEmojiEmotions} />
      <Button icon={MdSend} />
    </div>
  );
};

interface Props {
  icon: IconType;
}

const Button: React.FC<Props> = ({ icon: Icon }) => {
  return (
    <i className="hover:bg-gray-400/30 hover:dark:bg-white/20 transition-all p-2 rounded-md cursor-pointer">
      <Icon size={25} className="dark:fill-white fill-dark opacity-60" />
    </i>
  );
};
