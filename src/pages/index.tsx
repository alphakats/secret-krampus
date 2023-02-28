// src/pages/index.tsx

import { type NextPage } from "next";
import { api } from "~/utils/api";
import Topbar from "~/pages/topbar/Topbar";
import ParticipantsForm from "~/pages/components/ParticipantsForm"


const Home: NextPage = () => {

  // API Examples
  const postGroup = api.group.postGroup.useMutation();
  const postSecretSanta = () => {
    postGroup.mutate({ list: [ 'Sara', 'Gina' ] });
  };

  const getGroup = api.group.getGroup.useQuery({ groupId: "42" });
  const getDraw = api.draw.getDraw.useQuery({ passphrase: "sara-loves-christmas" });

  return (
    <div className="page">
      <Topbar />
      <ParticipantsForm />
    </div>
  )
};

export default Home;