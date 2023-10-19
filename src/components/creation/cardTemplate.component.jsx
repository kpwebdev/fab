const CardTemplate = ({
  name,
  currentTemplate,
  templateName,
  list,
  onChange,
}) => {
  return (
    <label className="t-border-2 t-p-f-16 t-rounded-f-8" htmlFor={templateName}>
      {/* header container */}
      <div className="t-flex t-justify-between t-text-f-md t-mb-f-56">
        <h5>{templateName}</h5>
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
      <div className="t-flex t-flex-col t-gap-f-16 t-px-f-24">
        {list.map(({ CardImage, alt }, idx) => (
          <div key={idx}>
            <CardImage />
          </div>
        ))}
      </div>
    </label>
  );
};

export default CardTemplate;
