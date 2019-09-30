import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            temvalue:'',
            userojb: {}
        }
    }

    
   ischange = (event) =>{
       this.setState({
           temvalue: event.target.value
       });
       this.props.checkconnect(this.state.temvalue);
   }
    hienthinut = () =>{
        if (this.props.display === true) {
            return <div className="btn btn-block btn-primary" onClick={this.props.ketnoi}>Thêm nhân viên</div>
        }else{
            return  <div className="btn btn-block btn-secondary" onClick={this.props.ketnoi}>Đóng</div>
        }
    }

    getuserobject = (infor) =>{
        this.setState({
            userojb: infor
        })
        this.props.getuserobjectApp(infor)
        
    }

    showedituser = () =>{
        if(this.props.edituser === true){
            return(<EditUser 
                getuserobject = {(infor) =>this.getuserobject(infor)}
                btnedit = {() => this.props.btnedituser()}
                loaduser = {this.props.userobject}
            />)
        }
    }


    render() {
        return (
            
            <div className="col-12">
                {this.showedituser()}
                <div className="form-group">
                    <div className="btn-group">
                    <input type="text" onKeyUp={(e)=>this.ischange(e)} onChange={(e)=>this.ischange(e)}  className="form-control" placeholder="Search"  style={{width: '350px'}} />
                    <div className="btn btn-info" onClick={()=>this.props.checkconnect(this.state.temvalue)}>Tìm</div> 
                    </div>
                    
                    {this.hienthinut()}
                </div>
                 <hr />
            </div>
           
        );
    }
}

export default Search;