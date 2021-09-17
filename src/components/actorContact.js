import actorData from '../data/actorData.json'
import React from 'react'
let numValue = 1 ;
let numValue1 = -1
class ShowContact extends React.Component {
    state = {
        actor:[...actorData.slice(0,7)]
    }
    //add Random Contact Function
    addRandom = () =>{
            let tempObj = actorData[Math.floor(Math.random()*actorData.length)]
            this.setState({actor: [...this.state.actor,tempObj]});
    }
    //Sort Contact by Name Function
    sortName = () =>{
        let tempArr = [...this.state.actor]
        numValue = numValue*-1;
        numValue1 = numValue1*-1;
        tempArr.sort(((a,b) =>{
            if(a.name > b.name){return numValue }
            if(b.name > a.name){return numValue1}
            else {return 0}
        }))
        this.setState({actor : tempArr})
    }
    //Sort Contact by Popularity Function
    sortPop = () =>{
        let tempArr = [...this.state.actor]
        numValue = numValue*-1;
        numValue1 = numValue1*-1;
        tempArr.sort(((a,b) => {
            if (b.popularity < a.popularity) return  numValue
            if (b.popularity > a.popularity) return numValue1
            else return 0
            
        }))
        this.setState({actor : tempArr})
        
    }
    //delete element Function
    del = (pop) => {
        let tempArr = this.state.actor
       let tempArr1 = tempArr.filter(elt => elt.popularity !== pop)
                this.setState({actor : tempArr1})
      
    }
    render() { 
        return (
        <div>
            <div className="butt">
            <button onClick={this.addRandom}>Add Random Contact</button>
            <button onClick={this.sortName}>Sort by Name</button>
            <button onClick={this.sortPop}>Sort by Popularity</button>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.actor.map(elt => 
                            <tr>
                                <td>
                                    <img src={elt.pictureUrl} alt="" />
                                </td>
                                <td>
                                    <p>{elt.name}</p>
                                </td>
                                <td>
                                    <p>{elt.popularity.toFixed(2)}</p>
                                </td>
                                <td>
                                    <button onClick={() => this.del(elt.popularity) }>Delete</button>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
            
        </div>
        )
    }
}
 
export default ShowContact;