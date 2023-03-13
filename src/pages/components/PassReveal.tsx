import { Label } from "@mui/icons-material";
import React, { useState } from "react";
import { api } from "~/utils/api";

export default function PassReveal() {

  const [passphrase, setPassphrase] = useState('')
  const getDraw = () => {
    const draw  = api.draw.getDraw.useQuery({ passphrase })
    return draw.data? draw.data.reciever : ''
  }

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form) as Iterable<[PropertyKey, string]>;
    const result = Object.fromEntries(formData);
    setPassphrase(result.passphrase!);
  }


  return (
    <>
    <div className='border-solid border-slate-200 px-10 py-3 m-1 bg-emerald-50 text-slate-700 rounded-lg'
>
      <h1 className="text-2xl">Already got your passphrase?</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label className="p-10">
          Enter Passphrase: <input className="border-solid" name="passphrase" defaultValue="enter passphrasse"/>
        </label>
      </form>
    </div>
    <div className="p-10 bg-orange-200 rounded-lg">
      <h1 className="text-2xl">Your Reciever is .... </h1>
      <p className="p-10 bg-orange-100 rounded-lg">{getDraw()}</p>
    </div>
    </>
  )
}
