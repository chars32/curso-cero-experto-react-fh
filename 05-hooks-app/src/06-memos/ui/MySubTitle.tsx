import React from "react";

interface Props {
  subTitle: string;

  callMyApi: () => void;
}

export const MySubTitle = React.memo(({ subTitle, callMyApi }: Props) => {
  console.log("MySubTitle re-render");

  return (
    <>
      <h6 className="text-2xl font-bold">{subTitle}</h6>

      <button
        className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
        onClick={callMyApi}
      >
        Llamar a funcion
      </button>
    </>
  );
});
