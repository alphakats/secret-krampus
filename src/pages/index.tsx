// src/pages/index.tsx

import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <main>
      <h1 className="text-2xl">Secret Santa</h1>
      <p>
        {hello.data ? hello.data.greeting : "Loading tRPC query..."}
      </p>
    </main>
  );
};

export default Home;

