const CardTemplate = ({
  name,
  currentTemplate,
  templateName,
  list,
  onChange,
}) => {
  return (
    <div className="t-border-2 t-p-f-16 t-rounded-f-8">
      {/* header container */}
      <div className="t-flex t-justify-between t-text-f-md t-mb-f-56">
        <label htmlFor={templateName}>{templateName}</label>
        <input
          type="radio"
          name={name}
          id={templateName}
          value={templateName}
          checked={currentTemplate === templateName}
          className="t-w-[1em]"
          onChange={onChange}
        />
      </div>

      {/* card container */}
      <label
        htmlFor={templateName}
        className="t-flex t-flex-col t-gap-f-16 t-px-f-24"
      >
        {list.map(({ cardImage, alt }, idx) => (
          <div key={idx}>
            <img src={cardImage} alt={alt} />
          </div>
        ))}
      </label>
    </div>
  );
};

export default CardTemplate;
