import { useRef, useState, useEffect, useContext } from "react";
import Color from "color";
import { HiOutlineUpload } from "react-icons/hi";
import { GoogleFontsContext } from "../../contexts/GoogleFontsProvider";
import { Form, Field } from "formik";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const CardCustomizationOptions = ({ side, values, setFieldValue }) => {
  const {
    frontBgColor,
    frontHasBgGradient,
    frontBgGradientStart,
    frontBgGradientCenter,
    frontBgGradientEnd,
    frontBgGradientDirection,
    frontBgOpacity,
    frontBgImageFile,
    frontBgImage,
    frontText,
    frontTextColor,
    frontTextOpacity,
    frontFontSize,
    frontFontFamily,
    frontFontWeight,
    frontIsItalic,
    frontIsUnderline,
    frontHasElementQrcode,
    frontHasElementNFC,
    frontElementColor,
    frontElementOpacity,
    frontLogoImageFile,
    frontLogoImage,
    backBgColor,
    backHasBgGradient,
    backBgGradientStart,
    backBgGradientCenter,
    backBgGradientEnd,
    backBgGradientDirection,
    backBgOpacity,
    backBgImage,
    backPersonText,
    backPersonTextColor,
    backPersonTextOpacity,
    backPersonFontSize,
    backPersonFontFamily,
    backPersonFontWeight,
    backIsPersonItalic,
    backIsPersonUnderline,
    backRoleText,
    backRoleTextColor,
    backRoleTextOpacity,
    backRoleFontSize,
    backRoleFontFamily,
    backRoleFontWeight,
    backIsRoleItalic,
    backIsRoleUnderline,
    backHasElementQrcode,
    backHasElementNFC,
    backElementColor,
    backElementOpacity,
  } = values;

  const { googleFonts, getFontWeights, loadGoogleFonts } = useContext(
    GoogleFontsContext
  );

  if (side === "front") {
    return (
      <Form className="t-text-f-md t-flex t-flex-col t-gap-f-24">
        {/* background setting */}
        <div>
          <span className="t-mb-f-8 t-block t-text-base">Background</span>
          <div className="t-flex t-gap-f-16 t-items-center t-justify-between">
            {/* left side */}
            <div className="t-flex t-flex-col t-gap-f-16 t-p-f-16 t-border-2 t-rounded-f-8 t-grow">
              {/* background color */}
              <div className="t-flex t-items-center t-gap-f-8">
                <label htmlFor="frontBgColor">Color</label>
                <Field
                  type="color"
                  name="frontBgColor"
                  id="frontBgColor"
                  className="form-control form-control-color"
                />
                <span className="t-border t-rounded-f-8 t-text-base t-select-all t-p-f-8">
                  {frontBgColor}
                </span>
                <Field
                  as="select"
                  name="frontBgOpacity"
                  id="frontBgOpacity"
                  className="form-select t-w-auto"
                >
                  <option value="25">25%</option>
                  <option value="50">50%</option>
                  <option value="75">75%</option>
                  <option value="100">100%</option>
                </Field>
              </div>
              {/* gradient */}
              <div className="t-flex t-items-center t-gap-f-8">
                <Field
                  type="checkbox"
                  id="frontHasBgGradient"
                  name="frontHasBgGradient"
                  className="form-check-input"
                />
                <label
                  htmlFor="frontHasBgGradient"
                  className="form-check-label"
                >
                  Gradient
                </label>
                <Field
                  type="color"
                  id="frontBgGradientStart"
                  name="frontBgGradientStart"
                  className="form-control form-control-color"
                />
                <Field
                  type="color"
                  id="frontBgGradientCenter"
                  name="frontBgGradientCenter"
                  className="form-control form-control-color"
                />
                <Field
                  type="color"
                  id="frontBgGradientEnd"
                  name="frontBgGradientEnd"
                  className="form-control form-control-color"
                />
                <Field
                  as="select"
                  id="frontBgGradientDirection"
                  name="frontBgGradientDirection"
                  className="form-select"
                >
                  <option value="0">0 Deg</option>
                  <option value="45">45 Deg</option>
                  <option value="90">90 Deg</option>
                  <option value="135">135 Deg</option>
                  <option value="180">180 Deg</option>
                  <option value="225">225 Deg</option>
                  <option value="270">270 Deg</option>
                  <option value="270">270 Deg</option>
                  <option value="315">315 Deg</option>
                  <option value="360">360 Deg</option>
                </Field>
              </div>
              <div></div>
            </div>
            {/* image upload button */}
            <label
              className="f-btn-md f-btn-primary t-flex t-items-center t-gap-2 t-cursor-pointer"
              htmlFor="frontBgImageFile"
            >
              <HiOutlineUpload />
              Image
            </label>
            <input
              type="file"
              className="t-hidden"
              id="frontBgImageFile"
              name="frontBgImageFile"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  setFieldValue("frontBgImage", reader.result);
                  setFieldValue("frontBgImageFile", file);
                };
              }}
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
                <label htmlFor="frontTextColor">Color</label>
                <Field
                  type="color"
                  id="frontTextColor"
                  name="frontTextColor"
                  className="form-control form-control-color"
                />
                <span className="t-border t-rounded-f-8 t-text-base t-p-f-8 t-select-all">
                  {frontTextColor}
                </span>
                <Field
                  as="select"
                  name="frontTextOpacity"
                  id="frontTextOpacity"
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
                  id="frontFontSize"
                  name="frontFontSize"
                  placeholder="Size"
                  className="form-control"
                />
                <span className="t-text-f-sm">px</span>
              </div>
              {/* add text field */}
              <Field
                type="text"
                id="frontText"
                name="frontText"
                className="form-control"
                placeholder="Enter text"
              />
            </div>

            {/* bottom */}
            <div className="t-flex t-items-center">
              <div className="t-flex t-items-center t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
                <label htmlFor="frontFontFamily">Font</label>
                <Field
                  as="select"
                  name="frontFontFamily"
                  id="frontFontFamily"
                  className="form-select"
                  onChange={(e) => {
                    loadGoogleFonts([e.target.value]);
                    setFieldValue("frontFontFamily", e.target.value);
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
                  name="frontFontWeight"
                  id="frontFontWeight"
                  className="form-select"
                >
                  {frontFontFamily &&
                    googleFonts.length > 0 &&
                    getFontWeights(frontFontFamily).map(
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
                    frontIsItalic
                      ? " t-bg-f-primary-30 t-text-f-primary-98"
                      : ""
                  }`}
                  onClick={() => setFieldValue("frontIsItalic", !frontIsItalic)}
                >
                  /
                </button>
                <button
                  type="button"
                  className={`t-border-2 t-p-f-8 t-rounded-f-8 t-w-f-96 t-block t-underline${
                    frontIsUnderline
                      ? " t-bg-f-primary-30 t-text-f-primary-98"
                      : ""
                  }`}
                  onClick={() =>
                    setFieldValue("frontIsUnderline", !frontIsUnderline)
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
            {/* <div className="t-flex t-items-center t-justify-between t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8"> */}
            {/* left */}
            {/* <div className="t-flex t-items-center t-gap-f-8">
                <label htmlFor="frontElementColor">Color</label>
                <Field
                  type="color"
                  id="frontElementColor"
                  name="frontElementColor"
                  className="form-control form-control-color"
                />
                <span className="t-border t-rounded-f-8 t-text-f-base t-select-all">
                  {frontElementColor}
                </span>
                <Field
                  as="select"
                  name="frontElementOpacity"
                  id="frontElementOpacity"
                  className="form-select t-w-auto"
                >
                  <option value="25">25%</option>
                  <option value="50">50%</option>
                  <option value="75">75%</option>
                  <option value="100">100%</option>
                </Field>
              </div> */}
            {/* add element dropdown */}
            {/* <div className="dropdown">
                <button
                  type="button"
                  className="f-btn-sm f-btn-primary-outline"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                >
                  Add Elements
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item t-flex t-gap-f-8">
                    <Field
                      type="checkbox"
                      id="frontHasElementQrcode"
                      name="frontHasElementQrcode"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="frontHasElementQrcode"
                      className="form-check-label t-grow"
                    >
                      QR Code
                    </label>
                  </li>
                  <li className="dropdown-item t-flex t-gap-f-8">
                    <Field
                      type="checkbox"
                      id="frontHasElementNFC"
                      name="frontHasElementNFC"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="frontHasElementNFC"
                      className="form-check-label t-grow"
                    >
                      NFC
                    </label>
                  </li>
                </ul>
              </div> */}
            {/* </div> */}

            {/* bottom */}
            <div className="t-flex t-justify-between t-items-center t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
              <div>
                Logo <span className="t-text-f-base">(.png, jpg only)</span>
              </div>

              {/* upload logo btn */}
              <div>
                <label
                  className="f-btn-md f-btn-primary t-flex t-items-center t-gap-2 t-cursor-pointer"
                  htmlFor="frontLogoImageFile"
                >
                  <HiOutlineUpload /> Logo
                </label>
                <input
                  type="file"
                  className="t-hidden"
                  id="frontLogoImageFile"
                  name="frontLogoImageFile"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      setFieldValue("frontLogoImage", reader.result);
                      setFieldValue("frontLogoImageFile", file);
                    };
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Form>
    );
  }

  return (
    <Form className="t-text-f-md t-flex t-flex-col t-gap-f-24">
      {/* background setting */}
      <div>
        <span className="t-mb-f-8 t-block t-text-base">Background</span>
        <div className="t-flex t-gap-f-16 t-items-center t-justify-between">
          {/* left side */}
          <div className="t-flex t-flex-col t-gap-f-16 t-p-f-16 t-border-2 t-rounded-f-8 t-grow">
            {/* background color */}
            <div className="t-flex t-items-center t-gap-f-8">
              <label htmlFor="backBgColor">Color</label>
              <Field
                type="color"
                name="backBgColor"
                id="backBgColor"
                className="form-control form-control-color"
              />
              <span className="t-border t-rounded-f-8 t-text-base t-select-all t-p-f-8">
                {backBgColor}
              </span>
              <Field
                as="select"
                name="backBgOpacity"
                id="backBgOpacity"
                className="form-select t-w-auto"
              >
                <option value="25">25%</option>
                <option value="50">50%</option>
                <option value="75">75%</option>
                <option value="100">100%</option>
              </Field>
            </div>
            {/* gradient */}
            <div className="t-flex t-items-center t-gap-f-8">
              <Field
                type="checkbox"
                id="backHasBgGradient"
                name="backHasBgGradient"
                className="form-check-input"
              />
              <label htmlFor="backHasBgGradient" className="form-check-label">
                Gradient
              </label>
              <Field
                type="color"
                id="backBgGradientStart"
                name="backBgGradientStart"
                className="form-control form-control-color"
              />
              <Field
                type="color"
                id="backBgGradientCenter"
                name="backBgGradientCenter"
                className="form-control form-control-color"
              />
              <Field
                type="color"
                id="backBgGradientEnd"
                name="backBgGradientEnd"
                className="form-control form-control-color"
              />
              <Field
                as="select"
                id="backBgGradientDirection"
                name="backBgGradientDirection"
                className="form-select"
              >
                <option value="0">0 Deg</option>
                <option value="45">45 Deg</option>
                <option value="90">90 Deg</option>
                <option value="135">135 Deg</option>
                <option value="180">180 Deg</option>
                <option value="225">225 Deg</option>
                <option value="270">270 Deg</option>
                <option value="270">270 Deg</option>
                <option value="315">315 Deg</option>
                <option value="360">360 Deg</option>
              </Field>
            </div>
            <div></div>
          </div>
          {/* image upload button */}
          <label
            className="f-btn-md f-btn-primary t-flex t-items-center t-gap-2 t-cursor-pointer"
            htmlFor="backBgImageFile"
          >
            <HiOutlineUpload />
            Image
          </label>
          <input
            type="file"
            className="t-hidden"
            id="backBgImageFile"
            name="backBgImageFile"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                setFieldValue("backBgImage", reader.result);
                setFieldValue("backBgImageFile", file);
              };
            }}
          />
        </div>
      </div>

      {/* person text setting */}
      <div>
        <span className="t-mb-f-8 t-block t-text-base">Text (Person Name)</span>
        {/* blocks container */}
        <div className="t-flex t-flex-col t-gap-f-8">
          {/* top */}
          <div className="t-flex t-items-center t-justify-between t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
            {/* left */}
            <div className="t-flex t-items-center t-gap-f-8">
              <label htmlFor="backPersonTextColor">Color</label>
              <Field
                type="color"
                id="backPersonTextColor"
                name="backPersonTextColor"
                className="form-control form-control-color"
              />
              <span className="t-border t-rounded-f-8 t-text-base t-p-f-8 t-select-all">
                {backPersonTextColor}
              </span>
              <Field
                as="select"
                name="backPersonTextOpacity"
                id="backPersonTextOpacity"
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
                id="backPersonFontSize"
                name="backPersonFontSize"
                placeholder="Size"
                className="form-control"
              />
              <span className="t-text-f-sm">px</span>
            </div>
            {/* add text field */}
            <Field
              type="text"
              id="backPersonText"
              name="backPersonText"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          {/* bottom */}
          <div className="t-flex t-items-center">
            <div className="t-flex t-items-center t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
              <label htmlFor="backPersonFontFamily">Font</label>
              <Field
                as="select"
                name="backPersonFontFamily"
                id="backPersonFontFamily"
                className="form-select"
                onChange={(e) => {
                  loadGoogleFonts([e.target.value]);
                  setFieldValue("backPersonFontFamily", e.target.value);
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
                name="backPersonFontWeight"
                id="backPersonFontWeight"
                className="form-select"
              >
                {backPersonFontFamily &&
                  googleFonts.length > 0 &&
                  getFontWeights(backPersonFontFamily).map(
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
                  backIsPersonItalic
                    ? " t-bg-f-primary-30 t-text-f-primary-98"
                    : ""
                }`}
                onClick={() =>
                  setFieldValue("backIsPersonItalic", !backIsPersonItalic)
                }
              >
                /
              </button>
              <button
                type="button"
                className={`t-border-2 t-p-f-8 t-rounded-f-8 t-w-f-96 t-block t-underline${
                  backIsPersonUnderline
                    ? " t-bg-f-primary-30 t-text-f-primary-98"
                    : ""
                }`}
                onClick={() =>
                  setFieldValue("backIsPersonUnderline", !backIsPersonUnderline)
                }
              >
                U
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* role text setting */}
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
                  backIsRoleItalic
                    ? " t-bg-f-primary-30 t-text-f-primary-98"
                    : ""
                }`}
                onClick={() =>
                  setFieldValue("backIsRoleItalic", !backIsRoleItalic)
                }
              >
                /
              </button>
              <button
                type="button"
                className={`t-border-2 t-p-f-8 t-rounded-f-8 t-w-f-96 t-block t-underline${
                  backIsRoleUnderline
                    ? " t-bg-f-primary-30 t-text-f-primary-98"
                    : ""
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
              <label htmlFor="backElementColor">Color</label>
              <Field
                type="color"
                id="backElementColor"
                name="backElementColor"
                className="form-control form-control-color"
              />
              <span className="t-border t-rounded-f-8 t-text-f-base t-select-all">
                {backElementColor}
              </span>
              <Field
                as="select"
                name="backElementOpacity"
                id="backElementOpacity"
                className="form-select t-w-auto"
              >
                <option value="25">25%</option>
                <option value="50">50%</option>
                <option value="75">75%</option>
                <option value="100">100%</option>
              </Field>
            </div>
            {/* add element dropdown */}
            <div className="dropdown">
              <button
                type="button"
                className="f-btn-sm f-btn-primary-outline"
                data-bs-toggle="dropdown"
                data-bs-auto-close="false"
              >
                Add Elements
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item t-flex t-gap-f-8">
                  <Field
                    type="checkbox"
                    id="backHasElementQrcode"
                    name="backHasElementQrcode"
                    className="form-check-input"
                  />
                  <label
                    htmlFor="backHasElementQrcode"
                    className="form-check-label t-grow"
                  >
                    QR Code
                  </label>
                </li>
                <li className="dropdown-item t-flex t-gap-f-8">
                  <Field
                    type="checkbox"
                    id="backHasElementNFC"
                    name="backHasElementNFC"
                    className="form-check-input"
                  />
                  <label
                    htmlFor="backHasElementNFC"
                    className="form-check-label t-grow"
                  >
                    NFC
                  </label>
                </li>
              </ul>
            </div>
          </div>

          {/* bottom */}
          {/* <div className="t-flex t-justify-between t-items-center t-gap-f-8 t-p-f-16 t-border-2 t-rounded-f-8">
            <div>
              Logo <span className="t-text-f-base">(.png, jpg only)</span>
            </div>

            <div>
              <label
                className="f-btn-md f-btn-primary t-flex t-items-center t-gap-2 t-cursor-pointer"
                htmlFor="backLogoImageFile"
              >
                <HiOutlineUpload /> Logo
              </label>
              <input
                type="file"
                className="t-hidden"
                id="backLogoImageFile"
                name="backLogoImageFile"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = () => {
                    setFieldValue("backLogoImage", reader.result);
                    setFieldValue("backLogoImageFile", file);
                  };
                }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </Form>
  );
};

export default CardCustomizationOptions;
