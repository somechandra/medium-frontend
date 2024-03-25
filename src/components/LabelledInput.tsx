import { ChangeEvent } from "react";

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const LabelledInput = ({
  label,
  placeholder,
  onChange,
  type = "text",
}: LabelledInputType) => {
  return (
    <div>
      <label className="block mb-2 text-md font-medium pt-3">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        className="border border-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
