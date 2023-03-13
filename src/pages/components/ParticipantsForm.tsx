import { ChangeEvent, SetStateAction, useState } from 'react';
import Link from 'next/link'


interface UserInput {
  index:number;
  name:string;
}

type Props = {
  post: (data : string[]) => void;
}

export default function ParticipantsForm({post}: Props) {

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
        console.log(inputFields);
        post(inputFields.map(({index, name}) => name))
    }

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
        <p className='Buttons'>
            <button className='bg-teal-600 hover:bg-teal-700 px-5 py-3 m-2 text-white rounded-lg' onClick={addField}>Add Name</button>
            <Link href="/group">
              <button className='bg-teal-600 hover:bg-teal-700 px-5 py-3 m-2 text-white rounded-lg' onClick={submit}>Submit</button>
            </Link>
        </p>
    </>
  );
}
