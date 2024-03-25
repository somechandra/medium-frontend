export const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold max-w-lg">
          "The customer service I received was exceptional. The support team
          went above and beyond to address my concerns."
        </div>
        <div>
          <div className="max-w-md text-xl font-semibold">Jules Winnfieldd</div>
          <div className="max-w-md text-sm font-semibold text-slate-400">
            CEO | Acme Corp
          </div>
        </div>
      </div>
    </div>
  );
};
