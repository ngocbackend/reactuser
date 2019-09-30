import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.loaduser.id,
            name: this.props.loaduser.name,
            phone: this.props.loaduser.phone,
            permission: this.props.loaduser.permission
        }
    }

    ischange = (event) =>{
        const ten = event.target.name;
        const giatri = event.target.value;
        this.setState({
            [ten]: giatri
        })
    }
    
    saveuser = () =>{
        var item ={}
        item.id = this.state.id;
        item.name = this.state.name;
        item.phone = this.state.phone;
        item.permission = this.state.permission;

        
        this.props.getuserobject(item);
        this.props.btnedit()
    }
    render() {
        return (
            <div className="col-6">
                <form>
                   
                      <div className="card text-center mt-2" style={{width: '100%'}}>
                          
                        <div className="card-body">
                        <h5 className="card-title">Sửa nhân viên</h5>
                        <div className="form-group">
                            <input type="text" onChange={(event) => this.ischange(event)} defaultValue={this.props.loaduser.name}  name="name" className="form-control" placeholder="Nhập tên nhân viên" />
                            
                        </div>
                        <div className="form-group">
                            <input type="number" onChange={(event) => this.ischange(event)} defaultValue={this.props.loaduser.phone}  name="phone" className="form-control" placeholder="Nhập sđt"  />
                            
                        </div>
                        <div className="form-group">
                            <select onChange={(event) => this.ischange(event)} defaultValue={this.props.loaduser.permission} className="form-control" name="permission">
                            <option>Chọn quyền</option>
                            <option value="1">Admin</option>
                            <option value="2">User</option>
                            </select>
                        </div>
                        <input type="button" className="btn btn-success luu" value="Lưu" onClick={()=>this.saveuser()}  />
                        <input type="button" className="btn btn-danger" value="Hủy" onClick={()=>this.props.btnedit()} />
                        </div>
                    </div>
                </form>
              
            </div>
        );
    }
}

export default EditUser;