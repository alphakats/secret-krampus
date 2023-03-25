// src/pages/index.tsx

import { type NextPage } from "next";
import ParticipantsForm from "~/pages/components/ParticipantsForm"
import PassReveal from "./components/PassReveal";


const Home: NextPage = () => {
  return (
    <>
    <div className="font-mono my-5 p-10 block align-middle bg-slate-50 rounded-lg">
      <ParticipantsForm />
    </div>
    <div className="font-mono my-5 p-10 block align-middle bg-slate-50 rounded-lg">
      <PassReveal />
    </div>
    </>
  )
};

export default Home;
