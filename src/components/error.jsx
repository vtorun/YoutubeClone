import React from "react";

const Error = ({ errorMessage }) => {
  return (
    <div className="bg-red-500 h-fit rounded p-4 flex flex-col gap-5 mt-44 mx-auto text-center">  
      <p>Üzgünüz bir hata oluştu....</p>
      <h1 className="font-semibold">{errorMessage}</h1>
    </div>
  );
};

export default Error;
