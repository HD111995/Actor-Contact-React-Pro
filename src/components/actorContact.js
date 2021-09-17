import actorData from '../data/actorData.json'
import React from 'react'
let numValue = 1 ;
let numValue1 = -1
class ShowContact extends React.Component {
    state = {
        actor:[...actorData.slice(0,7)],
        actorUserBehaivor:[...actorData.slice(0,7)],
        name:""
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
        this.setState({actorUserBehaivor : tempArr})
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
        this.setState({ actorUserBehaivor: tempArr})
        
    }
    //delete element Function
    del = (pop) => {
        let tempArr = this.state.actor
       let tempArr1 = tempArr.filter(elt => elt.popularity !== pop)
                console.log(typeof tempArr1)
                console.log(tempArr1)
                this.setState({actor : tempArr1})
                this.setState({ actorUserBehaivor: tempArr1})
    }
    //serach function in Action onchange
    search = (event) =>{
            this.setState({name:event.target.value})
            let temp = event.target.value
            console.log(this.state.name)
            
            let tempArrgg = [...actorData.filter(elt =>  elt.name === temp )]
            console.log(tempArrgg)
            if (tempArrgg.length >= 1 ){
                if (temp === tempArrgg[0].name){
                    this.setState({actor : tempArrgg})
                }
            }else {
                this.setState({ actor : this.state.actorUserBehaivor})
            }
           
            
    }
    render() { 
        return (
        <div>
            <div className="butt">
            <button onClick={this.addRandom}>Add Random Contact</button>
            <button onClick={this.sortName}>Sort by Name</button>
            <button onClick={this.sortPop}>Sort by Popularity</button>
            <input type="text" name="" placeholder="seach" onChange={this.search}></input>
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