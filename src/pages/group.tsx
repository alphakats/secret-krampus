import { api } from "~/utils/api";
import { v4 as uuidv4 } from 'uuid';


export default function Group() {

    // TODO Error handling
    // {postGroup.error && <p>Something went wrong! {postGroup.error.message}</p>}

    const getGroup = api.group.getGroup.useQuery({ groupId: "clf8q0tfo001iij144hdovz5h" });
  
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
        <div>
                <h1>Group</h1>
                <table>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
        </div>
    )
  }
  