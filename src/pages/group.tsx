import { api } from "~/utils/api";
import { v4 as uuidv4 } from 'uuid';


export default function Group() {

    const getGroup = api.group.getGroup.useQuery({ groupId: "42" });
    const getDraw = api.draw.getDraw.useQuery({ passphrase: "sara-loves-christmas" });
  
    console.log(getGroup.data ? getGroup.data.group : 'no data');
    const groupData = getGroup.data ? getGroup.data.group : null;
    let listItems;
    if (groupData) {
        listItems = groupData.map(group => 
                <tr key={uuidv4()}>
                    <th scope="row">Giver</th><td>{group.giver}</td>
                    <th scope="row">Passphrase</th><td>{group.passphrase}</td>
                </tr>
        );
    }
    return (
        <>
                <h1>Group</h1>
                <table>
                    {listItems}
                </table>
        </>
    )
  }
  