// src/pages/index.tsx

import { type NextPage } from "next";
import { api } from "~/utils/api";
import ParticipantsForm from "~/pages/components/ParticipantsForm"

const Home: NextPage = () => {

  // API Examples
  const postGroup = api.group.postGroup.useMutation();
  const postSecretSanta = (userData) => {
    console.log("Invoke func postSecretSanta .. data: " + userData)
    postGroup.mutate({ list: userData });
  };

  return (
    <div className="flex align-middle bg-slate-50">
      <ParticipantsForm post={postSecretSanta}/>
    </div>
  )
};

export default Home;
