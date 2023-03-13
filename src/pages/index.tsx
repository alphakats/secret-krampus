// src/pages/index.tsx

import { type NextPage } from "next";
import { api } from "~/utils/api";
import ParticipantsForm from "~/pages/components/ParticipantsForm"
import PassReveal from "./components/PassReveal";


const Home: NextPage = () => {
  // API Examples
  const postGroup = api.group.postGroup.useMutation();
  const postSecretSanta = (userData : Array<string>) => {
    console.log(postGroup.mutate({ list: userData }));
  };

  return (
    <>
    <div className="font-mono my-5 p-10 block align-middle bg-slate-50 rounded-lg">
      <ParticipantsForm post={postSecretSanta}/>
    </div>
    <div className="font-mono my-5 p-10 block align-middle bg-slate-50 rounded-lg">
      <PassReveal />
    </div>
    </>
  )
};

export default Home;
