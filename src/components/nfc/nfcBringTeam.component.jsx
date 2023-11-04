const NfcBringTeam = () => {
  return (
    <section className="t-bg-team-image t-py-f-96 t-text-f-primary-99">
      <div className="container">
        <h2 className="t-text-f-3xl t-mb-f-16">
          Bring your <span className="t-text-f-secondary-70">Team</span>
        </h2>
        <p className="t-text-f-md">
          Who says work has to be solitary? Gather your team and unlock new
          levels of productivity together. Collaborative efforts bring shared
          success, where strengths combine for greater achievements and a more
          fulfilling journey.
        </p>
        {/* buttons container */}
        <div className="t-flex t-justify-end t-gap-f-24 t-my-f-48">
          <button className="f-btn-md f-btn-secondary-outline">
            Add Company
          </button>
          <button className="f-btn-md f-btn-primary">Invite Team</button>
        </div>
      </div>
    </section>
  );
};

export default NfcBringTeam;
