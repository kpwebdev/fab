import { contacts } from "../../data";
import { BiStar, BiSolidStar, BiPencil } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contacts = () => {
  return (
    <div className="t-rounded-f-8 t-shadow-xl t-p-f-16 t-border t-text-f-md">
      <form>
        <table className="table t-align-middle">
          <thead>
            <tr>
              <th></th>
              <th>Profile</th>
              <th>Name</th>
              <th>Contact Information</th>
              <th>Operations</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map(
              ({ favorite, profilePic, name, mobileNum, emailId }, idx) => (
                <tr key={idx}>
                  <td>
                    <button>{favorite ? <BiSolidStar /> : <BiStar />}</button>
                  </td>
                  <td>
                    {profilePic ? (
                      <img
                        src={profilePic}
                        alt={`Profile picture of ${name}`}
                      />
                    ) : (
                      <FaUserAlt className="t-bg-f-primary-50 t-text-f-primary-98 t-p-f-8 t-text-f-xl t-rounded-full" />
                    )}
                  </td>
                  <td>{name}</td>
                  <td className="t-flex t-gap-f-8 t-flex-col">
                    <Link to={`tel:${mobileNum}`} target="_blank">
                      {mobileNum}
                    </Link>
                    <Link
                      to={`mailto:${emailId}`}
                      target="_blank"
                      className="hover:t-no-underline t-underline t-text-f-primary-30"
                    >
                      {emailId}
                    </Link>
                  </td>
                  <td>
                    <div className="t-flex t-gap-f-16">
                      <button type="button">
                        <BiPencil className="t-text-green-500" />
                      </button>
                      <button type="button" className="t-text-red-500">
                        <AiFillCloseCircle />
                      </button>
                      <Input unique={`checkbox${idx}`} />
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
};

function Input({ unique }) {
  const [checked, setChecked] = useState(false);
  return (
    <input
      type="checkbox"
      id={unique}
      name={unique}
      value={checked}
      onChange={() => setChecked(!checked)}
      className="t-cursor-pointer"
    />
  );
}

export default Contacts;
