import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            phone:"",
            permission:"",
            errorname:"",
            errornumber:"",
            isvalidate: false
        }
    }

    ischange = (event) =>  {
        const ten = event.target.name
        const giatri = event.target.value
        this.setState({
            [ten] : giatri
        })
    }
    
   
    
    hienthi = () =>{
        if(this.props.display === false){
            return( 
            <div className="col">
                <form>
                      <div className="card text-center mt-2" style={{width: '100%'}}>
                        <div className="card-body">
                        <h5 className="card-title">Thêm nhân viên</h5>
                        <div className="form-group">
                            <input type="text" onChange={(e)=>this.ischange(e)} name="name" className="form-control" placeholder="Nhập tên nhân viên" />
                            
                        </div>
                        <div className="form-group">
                            <input type="number" onChange={(e)=>this.ischange(e)} name="phone" className="form-control" placeholder="Nhập sđt"  />
                            
                        </div>
                        <div className="form-group">
                            <select className="form-control" onChange={(e)=>this.ischange(e)} name="permission">
                            <option>Chọn quyền</option>
                            <option value="1">Admin</option>
                            <option value="2">User</option>
                            </select>
                        </div>
                        <input type="reset" className="btn btn-primary"  onClick={()=>this.props.newdata(this.state.name,this.state.phone,this.state.permission)} value="Thêm nhân viên" />
                        </div>
                    </div>
                </form>
              
            </div>
            )
        }
       
    }
    render() {
        
        return (
           
                <div>
                    {this.hienthi()}
                </div>
               
              
            

        );
    }
}

export default AddUser;