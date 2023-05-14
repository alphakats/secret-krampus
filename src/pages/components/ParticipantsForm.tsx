import { ChangeEvent, SetStateAction, useState, forwardRef } from 'react';
import { api } from "~/utils/api";
import Link from 'next/link'


interface UserInput {
  index:number;
  name:string;
}


export default function ParticipantsForm() {
    /** nameCount is the default number of name fields shown on startpage*/
    const nameCount = 4; 
  
    const [inputFields, setInputFields] = useState(
        Array(nameCount).fill(null).map((_, i) => ({index: i, name: ''}))
      )
    
    /** In order to send data via tRCP we get a handle on group */
    const postGroup = api.group.postGroup.useMutation();
    
    /** On User input, update our component state  */
    const handleFormChange = (index:number, event: ChangeEvent) => {
        const data: SetStateAction<UserInput[]> = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    
    const addField = () => {
        const newField = {name: ''};
        setInputFields([...inputFields, newField])
    }
    
    const submit = async () => {
      console.log('submit button')
      const userData: Array<string> = inputFields.map(({index, name}) => name)
      /** Mutation is the way we send data to our backend */
      postGroup.mutate({ list: userData })
      console.log(postGroup.data)
    }

    const SubmitButton = forwardRef(({ onClick, href }, ref) => {
      return (
        <button 
          onClick={onClick}>
          <a 
            href={href} 
            onClick={onClick}
            ref={ref}>
              Submit
          </a>
        </button>
      )
    })

    return (
      <div>
        <h1 >Create a new Secret Santa Group</h1>
          <form  onSubmit={submit}>
            {inputFields.map((input, index) => {
              return (
                <div key={index}>
                  <input 
                    name='name'
                    placeholder='Name'
                    value={input.name}
                    onChange={event => handleFormChange(index, event)}
                    />
                </div>
              )
            })}
          </form>
        <div >

          <button 
            onClick={addField}>
              Add Name
          </button>
{/* 
          <Link href={{
            pathname: "/group",
            query: { groupId: postGroup.data?.groupId }
          }}> */}
            <SubmitButton 
              onClick={submit}>
              Submit
            </SubmitButton>
          {/* </Link> */}
          </div>
    </div>
  );
}
