// src/pages/index.tsx

import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {

  // API Examples
  const postGroup = api.group.postGroup.useMutation();
  const postSecretSanta = () => {
    postGroup.mutate({ list: [ 'Sara', 'Gina' ] });
  };

  const getGroup = api.group.getGroup.useQuery({ groupId: "42" });
  const getDraw = api.draw.getDraw.useQuery({ passphrase: "sara-loves-christmas" });

  return (
    <main>
      <h1 className="text-2xl">Secret Santa</h1>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={postSecretSanta} disabled={postGroup.isLoading}>
          POST /group
        </button>

        <p className="text-1xl text-red-500">
          {postGroup.error && <p>Something went wrong! {postGroup.error.message}</p>}
          {postGroup.data ? postGroup.data.groupId : "Loading tRPC query..."}
        </p>
      </div>
      <h1 className="text-2xl">Mock Data</h1>
      <div>
        <p className="text-1xl text-white">
          GET /group/42:
          {getGroup.data ? getGroup.data.group.map(el => <div>{el.name} : {el.passphrase}</div>)  : "Loading tRPC query..."}
        </p>
        <p className="text-1xl text-white">
          GET /draw/sara-loves-christmas:
          {getDraw.data ? getDraw.data.name : "Loading tRPC query..."}
        </p>
      </div>
    </main>
  );
};

export default Home;

