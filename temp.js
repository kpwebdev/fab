<form className="t-text-f-md t-flex t-flex-col t-gap-f-24">
  {/* background setting */}
  <div>
    <span className="t-mb-f-8 t-block t-text-base">Background</span>
    <div className="t-flex t-gap-f-16 t-items-center t-justify-between">
      {/* left side */}
      <div className="t-flex t-items-center t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8 t-grow">
        <label htmlFor="bgColor">Color</label>
        <input
          type="color"
          value={frontFormInputs.bgColor}
          name="bgColor"
          id="bgColor"
          onChange={handleChange}
          className="form-control form-control-color"
        />
        <span className="t-border t-rounded-f-8 t-text-base t-select-all t-p-f-8">
          {frontFormInputs.bgColor}
        </span>
        <select
          name="bgOpacity"
          id="bgOpacity"
          value={frontFormInputs.bgOpacity}
          onChange={handleChange}
          className="form-select t-w-auto"
        >
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>
      </div>
      {/* image upload button */}
      <label
        className="f-btn-md f-btn-primary t-flex t-items-center t-gap-2 t-cursor-pointer"
        htmlFor="bgImage"
      >
        <HiOutlineUpload /> Upload Image
      </label>
      <input
        type="file"
        className="t-hidden"
        id="bgImage"
        value={frontFormInputs.bgImage}
        onChange={handleChange}
      />
    </div>
  </div>

  {/* text setting */}
  <div>
    <span className="t-mb-f-8 t-block t-text-base">Text</span>
    {/* blocks container */}
    <div className="t-flex t-flex-col t-gap-f-8">
      {/* top */}
      <div className="t-flex t-items-center t-justify-between t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
        {/* left */}
        <div className="t-flex t-items-center t-gap-f-8">
          <label htmlFor="textColor">Color</label>
          <input
            type="color"
            value={frontFormInputs.textColor}
            id="textColor"
            name="textColor"
            onChange={handleChange}
            className="form-control form-control-color"
          />
          <span className="t-border t-rounded-f-8 t-text-base t-p-f-8 t-select-all">
            {frontFormInputs.textColor}
          </span>
          <select
            name="textOpacity"
            id="textOpacity"
            value={frontFormInputs.textOpacity}
            onChange={handleChange}
            className="form-select t-w-auto"
          >
            <option value="25">25%</option>
            <option value="50">50%</option>
            <option value="75">75%</option>
            <option value="100">100%</option>
          </select>
        </div>
        {/* add text button */}
        <button className="f-btn-sm f-btn-primary-outline">Add Text</button>
      </div>

      {/* bottom */}
      <div className="t-flex t-items-center">
        <div className="t-flex t-items-center t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
          <label htmlFor="fontFamily">Font</label>
          <select
            name="fontFamily"
            id="fontFamily"
            value={frontFormInputs.fontFamily}
            onChange={handleChange}
            className="form-select"
          >
            {googleFonts.map(({ family }) => (
              <option value={family} key={family}>
                {family}
              </option>
            ))}
          </select>
          <select
            name="fontWeight"
            id="fontWeight"
            value={frontFormInputs.fontWeight}
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
              frontFormInputs.isBold
                ? " t-bg-f-primary-30 t-text-f-primary-98"
                : ""
            }`}
            onClick={() =>
              setFrontFormInputs({
                ...frontFormInputs,
                isBold: !frontFormInputs.isBold,
              })
            }
          >
            B
          </button>
          <button
            type="button"
            className={`t-border-2 t-p-f-8 t-rounded-f-8 t-w-f-96 t-block ${
              frontFormInputs.isItalic
                ? " t-bg-f-primary-30 t-text-f-primary-98"
                : ""
            }`}
            onClick={() =>
              setFrontFormInputs({
                ...frontFormInputs,
                isItalic: !frontFormInputs.isItalic,
              })
            }
          >
            /
          </button>
          <button
            type="button"
            className={`t-border-2 t-p-f-8 t-rounded-f-8 t-w-f-96 t-block t-underline${
              frontFormInputs.isUnderline
                ? " t-bg-f-primary-30 t-text-f-primary-98"
                : ""
            }`}
            onClick={() =>
              setFrontFormInputs({
                ...frontFormInputs,
                isUnderline: !frontFormInputs.isUnderline,
              })
            }
          >
            U
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* elements setting */}
  <div>
    <span className="t-mb-f-8 t-block t-text-base">Elements</span>
    {/* blocks container */}
    <div className="t-flex t-flex-col t-gap-f-8">
      {/* top */}
      <div className="t-flex t-items-center t-justify-between t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
        {/* left */}
        <div className="t-flex t-items-center t-gap-f-8">
          <label htmlFor="elementColor">Color</label>
          <input
            type="color"
            value={frontFormInputs.elementColor}
            id="elementColor"
            name="elementColor"
            onChange={handleChange}
            className="form-control form-control-color"
          />
          <span className="t-border t-rounded-f-8 t-text-f-base t-select-all">
            {frontFormInputs.elementColor}
          </span>
          <select
            name="elementOpacity"
            id="elementOpacity"
            value={frontFormInputs.elementOpacity}
            onChange={handleChange}
            className="form-select t-w-auto"
          >
            <option value="25">25%</option>
            <option value="50">50%</option>
            <option value="75">75%</option>
            <option value="100">100%</option>
          </select>
        </div>
        {/* add element button */}
        <button className="f-btn-sm f-btn-primary-outline">Add Elements</button>
      </div>

      {/* bottom */}
      <div className="t-flex t-justify-between t-items-center t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
        <div>
          Logo <span className="t-text-f-base">(.png, jpg only)</span>
        </div>

        {/* upload logo btn */}
        <div>
          <label
            className="f-btn-md f-btn-primary t-flex t-items-center t-gap-2 t-cursor-pointer"
            htmlFor="logoImage"
          >
            <HiOutlineUpload /> Upload Logo
          </label>
          <input
            type="file"
            className="t-hidden"
            id="logoImage"
            value={frontFormInputs.logoImage}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  </div>
</form>;
