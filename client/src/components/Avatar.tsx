interface AvatarProps {
    authorName: string;
}
const Avatar = ({authorName}:AvatarProps) => {
    const words = authorName.trim().split(' ');
    const firstInitial = words[0][0].toUpperCase();
    const lastInitial = words.length > 1 ? words[words.length - 1][0].toUpperCase(): "";
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400">
            <span className="font-medium text-gray-600 dark:text-gray-300">{firstInitial}{lastInitial}</span>    
        </div>
  )
}

export default Avatar
