import { Label } from "@mui/icons-material";
import React, { useState } from "react";
import { api } from "~/utils/api";

export default function PassReveal() {

  const [passphrase, setPassphrase] = useState('')
  const revealDraw = () => {
    const draw  = api.draw.getDraw.useQuery({ passphrase })
    return draw.data? draw.data.receiver : ''
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
    <div >
      <h1 >Already got your passphrase?</h1>
      <form method="post" onSubmit={handleSubmit}>
        Enter Passphrase: 
        <input 
          name="passphrase"
          defaultValue="enter passphrasse"/>
      </form>
    <div >
      <h1 >Your receiver is .... 🎁</h1>
      {/* <p >{revealDraw()}</p> */}
    </div>
    </div>
  )
}
