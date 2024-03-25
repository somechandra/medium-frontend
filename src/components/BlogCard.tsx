import { Avatar } from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="border-b p-4">
      <div className="flex items-center">
        <Avatar name={authorName} />
        <div className="font-extralight px-2">{authorName}</div>|
        <div className="font-thin px-2 text-slate-500">{publishedDate}</div>
      </div>
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-md font-thin line-clamp-2">
        {content}
        {/* {content.slice(0, 100) + "..."} */}
      </div>
      <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
        content.length / 100
      )} minute(s) read`}</div>
    </div>
  );
};
