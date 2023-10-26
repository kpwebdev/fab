import React from "react";

const GoogleFonts = () => {
  return (
    <div className="t-flex t-items-center t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
      <label htmlFor="fontFamily">Font</label>
      <select
        name="fontFamily"
        id="fontFamily"
        value={formInputs.fontFamily}
        onChange={handleChange}
        className="form-select"
      >
        {/* <GoogleFonts googleFonts={googleFonts} /> */}
        {/* testing */}
        {/* {googleFonts.map(({ family }) => (
                  <option value={family} key={family}>
                    {family}
                  </option>
                ))} */}
      </select>
      <select
        name="fontWeight"
        id="fontWeight"
        value={formInputs.fontWeight}
        onChange={handleChange}
        className="form-select"
      >
        {googleFontWeights.map((weight) => (
          <option
            value={weight}
            key={weight}
          >{`${weight[0].toUpperCase()}${weight
            .slice(1)
            .toLowerCase()}`}</option>
        ))}
      </select>
      <button
        type="button"
        className={`t-border-2 t-p-f-8 t-rounded-f-8 t-w-f-96 t-block ${
          formInputs.isBold ? " t-bg-f-primary-30 t-text-f-primary-98" : ""
        }`}
        onClick={() =>
          setFormInputs({
            ...formInputs,
            isBold: !formInputs.isBold,
          })
        }
      >
        B
      </button>
      <button
        type="button"
        className={`t-border-2 t-p-f-8 t-rounded-f-8 t-w-f-96 t-block ${
          formInputs.isItalic ? " t-bg-f-primary-30 t-text-f-primary-98" : ""
        }`}
        onClick={() =>
          setFormInputs({
            ...formInputs,
            isItalic: !formInputs.isItalic,
          })
        }
      >
        /
      </button>
      <button
        type="button"
        className={`t-border-2 t-p-f-8 t-rounded-f-8 t-w-f-96 t-block t-underline${
          formInputs.isUnderline ? " t-bg-f-primary-30 t-text-f-primary-98" : ""
        }`}
        onClick={() =>
          setFormInputs({
            ...formInputs,
            isUnderline: !formInputs.isUnderline,
          })
        }
      >
        U
      </button>
    </div>
  );
};

export default React.memo(GoogleFonts);
