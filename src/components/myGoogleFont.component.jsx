import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
const GOOGLE_FONTS_API = "AIzaSyDiTsaJxyKJYA8iPhB9nfhHG0hzyINXQFg";
const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API}`;

const generateWeightNumber = (weight) => {
  switch (weight) {
    case "Thin":
      return 100;
    case "Extra Light":
      return 200;
    case "Light":
      return 300;
    case "Regular":
      return 400;
    case "Medium":
      return 500;
    case "Semi Bold":
      return 600;
    case "Bold":
      return 700;
    case "Extra Bold":
      return 800;
    case "Black":
      return 900;
    case "Extra Black":
      return 950;
    default:
      return weight;
  }
};

const generateWeightName = (weight) => {
  switch (weight.toLowerCase()) {
    case "100":
      return "Thin";
    case "200":
      return "Extra Light";
    case "300":
      return "Light";
    case "400":
    case "regular":
      return "Regular";
    case "500":
      return "Medium";
    case "600":
      return "Semi Bold";
    case "700":
      return "Bold";
    case "800":
      return "Extra Bold";
    case "900":
      return "Black";
    case "950":
      return "Extra Black";
    default:
      return weight;
  }
};

const MyGoogleFont = () => {
  const [fonts, setFonts] = useState([]);
  const [fontFamily, setFontFamily] = useState("");
  const [variant, setVariant] = useState("");
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);

  const handleFontFamily = (e) => {
    const fontFamily = e.target.value;
    const googleFontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`;
    const currentlyAvailableLinkTag = document.querySelector(
      `#google-font-${fontFamily}`
    );
    if (!currentlyAvailableLinkTag) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.id = `google-font-${fontFamily}`;
      link.href = googleFontUrl;
      document.head.append(link);
    }
    setFontFamily(fontFamily);
  };

  const handleVariant = (e) => {
    setVariant(e.target.value);
  };

  useEffect(() => {
    const fetchGoogleFonts = async () => {
      const {
        data: { items },
      } = await axios(url);
      setFonts(items);
    };

    fetchGoogleFonts();
  }, []);

  return (
    <div className="">
      <div>
        <select
          name="fontFamily"
          id="fontFamily"
          onChange={handleFontFamily}
          value={fontFamily}
        >
          <option value="">Font Family</option>
          {fonts.map(({ family }) => (
            <option value={family} key={family}>
              {family}
            </option>
          ))}
        </select>

        <select
          name="variant"
          id="variant"
          onChange={handleVariant}
          value={variant}
        >
          <option value="">Variant</option>
          {fonts
            .find(({ family }) => family === fontFamily)
            ?.variants.filter(
              (variant) => variant === "regular" || !variant.includes("i")
            )
            .map((variant) => (
              <option value={variant} key={generateWeightName(variant)}>
                {generateWeightName(variant)}
              </option>
            ))}
        </select>
        <input
          id="isBold"
          type="checkbox"
          checked={isBold}
          onChange={(e) => setIsBold(!isBold)}
        />
        <label htmlFor="isBold">Bold</label>
        <input
          id="isUnderlined"
          type="checkbox"
          checked={isUnderlined}
          onChange={(e) => setIsUnderlined(!isUnderlined)}
        />
        <label htmlFor="isUnderlined">Undeline</label>
        <input
          id="isItalic"
          type="checkbox"
          checked={isItalic}
          onChange={(e) => setIsItalic(!isItalic)}
        />
        <label htmlFor="isItalic">Italic</label>
        <div
          style={{
            paddingTop: "24px",
            paddingBottom: "24px",
            fontSize: "48px",
            fontFamily: fontFamily || "sans-serif",
            fontWeight: generateWeightNumber(variant) || "regular",
            fontStyle: isItalic ? "italic" : "normal",
            textDecoration: isUnderlined ? "underline" : "none",
          }}
        >
          I am the Current font
        </div>
      </div>
    </div>
  );
};

export default MyGoogleFont;
