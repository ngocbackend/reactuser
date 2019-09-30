import React, {Component}  from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import AddUser from './AddUser';
import Data from './Data.json';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthi: true,
      dulieu: Data,
      textserch:'',
      edituser: false,
      userobject: {}
    }
  }

  
  componentWillMount() {
    if (localStorage.getItem('userdata') === null) {
      localStorage.setItem('userdata',JSON.stringify(Data))
      
    }else{
      var temp = JSON.parse(localStorage.getItem('userdata'))
      this.setState({
        dulieu: temp
      })
    }
   
  }
  
  
  editUser = (user) => {
    this.setState({
      edituser: true,
      userobject: user
    })
    console.log(user)
  }
  btnedituser = () =>{
    this.setState({
      edituser: !this.state.edituser
    })
  }
  getNewdata = (name,phone,permission) => {
      
        var item ={}
        item.id = uuidv1();
        item.name = name
        item.phone = phone
        item.permission = permission
        
        var items = this.state.dulieu
        items.push(item);
        this.setState({
          dulieu: items
        })
      localStorage.setItem('userdata',JSON.stringify(items))
          
  }

  checkconnect = (dl) =>{
    this.setState({
      textserch: dl
    })
  }
  
  btnclick = () =>{
    this.setState({
      hienthi: !this.state.hienthi
    })
  }

  getuserobjectApp = (infor) =>{
    this.state.dulieu.forEach((value,key) =>{
      if (value.id === infor.id) {
        value.name = infor.name
        value.phone = infor.phone
        value.permission = infor.permission
      }
    })
    localStorage.setItem('userdata',JSON.stringify(this.state.dulieu))
  }

  deleteuserApp = (userid) =>{
    var tempdata = this.state.dulieu;
    tempdata.forEach((value,key)=>{
      if (value.id === userid) {
        tempdata.splice(key,1)
      }
    })
    this.setState({
      dulieu:tempdata
    })
    localStorage.setItem('userdata',JSON.stringify(tempdata))
  }
  
  render(){
    //localStorage.setItem('userdata',JSON.stringify( this.state.dulieu))
    var mang = [];
    this.state.dulieu.forEach(item => {
      if(item.name.toLowerCase().search(this.state.textserch) !== -1){
        mang.push(item);
      }
    });
    
    return (
        <div>
          <Header/>
          <div className="container">
            <div className="row">
              
              <Search
              getuserobjectApp = {(infor) =>this.getuserobjectApp(infor)}
              checkconnect={(dl)=>this.checkconnect(dl)}
              ketnoi={()=>this.btnclick()}
               display={this.state.hienthi}
               edituser={this.state.edituser} 
               btnedituser={this.btnedituser}
               userobject ={this.state.userobject}
               />
              <Table dulieu={mang} 
              btnedituser={this.btnedituser}
              editfunctions ={(user)=>this.editUser(user)}
              deleteuserApp = {(userid)=>this.deleteuserApp(userid)}
              />
              <AddUser  newdata={(name,phone,permission)=>this.getNewdata(name,phone,permission)} display={this.state.hienthi}/>
            </div>
          </div>
        </div>
      );
  }
 
}

export default App;
