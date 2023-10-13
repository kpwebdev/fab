import React from "react";

const GoogleFonts = ({ googleFonts }) => {
  return (
    <>
      {googleFonts.map(({ family }) => (
        <option value={family} key={family}>
          {family}
        </option>
      ))}
    </>
  );
};

export default React.memo(GoogleFonts);
