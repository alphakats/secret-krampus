// src/pages/index.tsx

import { type NextPage } from "next";
import { api } from "~/utils/api";
import Topbar from "~/pages/topbar/Topbar";
import ParticipantsForm from "~/pages/components/ParticipantsForm"
import { useState } from 'react';


const Home: NextPage = () => {

  // API Examples
  const postGroup = api.group.postGroup.useMutation();
  // const postSecretSanta = () => {
  //   postGroup.mutate({ list: [ 'Sara', 'Gina' ] });
  // };
  const postSecretSanta = (userData) => {
    console.log("Invoke func postSecretSanta .. data: " + userData)
    postGroup.mutate({ list: userData });
  };


  const getGroup = api.group.getGroup.useQuery({ groupId: "42" });
  const getDraw = api.draw.getDraw.useQuery({ passphrase: "sara-loves-christmas" });

  return (
    <div className="page">
      <Topbar />
      <ParticipantsForm post={postSecretSanta}/>
    </div>
  )
};

export default Home;