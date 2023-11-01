import { useQuery } from "@tanstack/react-query";
import { getProfileUser } from "../utils/firebase/firebase.util";
import DigitalProfileTemplate1 from "../components/creation/digitalProfileTemplate1.component";
import DigitalProfileTemplate2 from "../components/creation/digitalProfileTemplate2.component";
import DigitalProfileTemplate3 from "../components/creation/digitalProfileTemplate3.component";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userName } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => getProfileUser(userName),
  });

  if (isPending) return <div>Loading...</div>;
  const { profile } = data;
  const { name, colors, id } = profile;

  if (name === "template-1") {
    return <DigitalProfileTemplate1 data={data} colors={colors} />;
  }
  if (name === "template-2") {
    return <DigitalProfileTemplate2 data={data} colors={colors} />;
  }
  if (name === "template-3") {
    return <DigitalProfileTemplate3 data={data} colors={colors} />;
  }

  return <div>Profile</div>;
};

export default Profile;
