import { ChangeEvent, SetStateAction, useState, forwardRef } from 'react';
import { api } from "~/utils/api";
import Link from 'next/link'




interface UserInput {
  index:number;
  name:string;
}


export default function ParticipantsForm() {

    // API Examples
    const postGroup = api.group.postGroup.useMutation();
    const postSecretSanta = (userData : Array<string>) => {
      postGroup.mutate({ list: userData });
    };

    const nameCount = 4; // default number of name fields
    const [inputFields, setInputFields] = useState(
        Array(nameCount).fill(null).map((_, i) => ({index: i, name: ''}))
      )
    
    const handleFormChange = (index:number, event: ChangeEvent) => {
        const data: SetStateAction<UserInput[]> = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    
    const addField = () => {
        const newField = {name: ''};
        setInputFields([...inputFields, newField])
    }
    
    const submit = () => {
        postSecretSanta(inputFields.map(({index, name}) => name))
    }

    const SubmitButton = forwardRef(({ onClick, href }, ref) => {
      return (
        <button className='bg-teal-600 hover:bg-teal-700 px-5 py-3 m-2 text-white rounded-lg' onClick={onClick}>
          <a href={href} onClick={onClick} ref={ref}>
            Submit
          </a>
        </button>
)
    })

    return (
        <>
        <h1 className="text-2xl">Create a new Secret Santa Group</h1>
              <form className='p-2 m-3' onSubmit={submit}>
                {inputFields.map((input, index) => {
                  return (
                    <div key={index}>
                      <input className='border-solid border-slate-200 px-10 py-3 m-1 bg-teal-50  hover:bg-teal-100 rounded-lg'
                        name='name'
                        placeholder='Name'
                        value={input.name}
                        onChange={event => handleFormChange(index, event)}
                        />
                    </div>
                  )
                })}
              </form>
        <p>
            <button className='bg-teal-600 hover:bg-teal-700 px-5 py-3 m-2 text-white rounded-lg' onClick={addField}>Add Name</button>
            <Link href="/group" passHref legacyBehavior>
              <SubmitButton onClick={submit}>Submit</SubmitButton>
            </Link>
        </p>
    </>
  );
}
