{
  /* role text setting */
}
<div>
  <span className="t-mb-f-8 t-block t-text-base">Text (Role)</span>
  {/* blocks container */}
  <div className="t-flex t-flex-col t-gap-f-8">
    {/* top */}
    <div className="t-flex t-items-center t-justify-between t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
      {/* left */}
      <div className="t-flex t-items-center t-gap-f-8">
        <label htmlFor="backRoleTextColor">Color</label>
        <Field
          type="color"
          id="backRoleTextColor"
          name="backRoleTextColor"
          className="form-control form-control-color"
        />
        <span className="t-border t-rounded-f-8 t-text-base t-p-f-8 t-select-all">
          {backRoleTextColor}
        </span>
        <Field
          as="select"
          name="backRoleTextOpacity"
          id="backRoleTextOpacity"
          className="form-select t-w-auto"
        >
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </Field>
      </div>
      <div className="t-flex t-items-center t-gap-f-8">
        <Field
          type="number"
          id="backRoleFontSize"
          name="backRoleFontSize"
          placeholder="Size"
          className="form-control"
        />
        <span className="t-text-f-sm">px</span>
      </div>
      {/* add text field */}
      <Field
        type="text"
        id="backRoleText"
        name="backRoleText"
        className="form-control"
        placeholder="Enter your role"
      />
    </div>

    {/* bottom */}
    <div className="t-flex t-items-center">
      <div className="t-flex t-items-center t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
        <label htmlFor="backRoleFontFamily">Font</label>
        <Field
          as="select"
          name="backRoleFontFamily"
          id="backRoleFontFamily"
          className="form-select"
          onChange={(e) => {
            loadGoogleFonts([e.target.value]);
            setFieldValue("backRoleFontFamily", e.target.value);
          }}
        >
          {/* <GoogleFonts googleFonts={googleFonts} /> */}
          {googleFonts.length > 0 &&
            googleFonts.map(({ family }) => (
              <option value={family} key={family}>
                {family}
              </option>
            ))}
        </Field>
        <Field
          as="select"
          name="backRoleFontWeight"
          id="backRoleFontWeight"
          className="form-select"
        >
          {backRoleFontFamily &&
            googleFonts.length > 0 &&
            getFontWeights(backRoleFontFamily).map(
              ({ weightName, weightNum }) => (
                <option value={weightNum} key={weightNum}>
                  {weightName}
                </option>
              )
            )}
        </Field>
        <button
          type="button"
          className={`t-border-2 t-p-f-8 t-rounded-f-8 t-w-f-96 t-block ${
            backIsRoleItalic ? " t-bg-f-primary-30 t-text-f-primary-98" : ""
          }`}
          onClick={() => setFieldValue("backIsRoleItalic", !backIsRoleItalic)}
        >
          /
        </button>
        <button
          type="button"
          className={`t-border-2 t-p-f-8 t-rounded-f-8 t-w-f-96 t-block t-underline${
            backIsRoleUnderline ? " t-bg-f-primary-30 t-text-f-primary-98" : ""
          }`}
          onClick={() =>
            setFieldValue("backIsRoleUnderline", !backIsRoleUnderline)
          }
        >
          U
        </button>
      </div>
    </div>
  </div>
</div>;
