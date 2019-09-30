import React, { Component } from 'react';

class TableTr extends Component {
    permission = ()=>{
        if (this.props.permission === 1) {
            return( <td>Admin</td>)
        }else{
            return <td>User</td>
        }
    }
    delete = (userid) =>{
        this.props.deleteuser(userid)
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt +1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                {this.permission()}
                <td>
                <div className="btn btn-warning btn-sm sua" onClick={()=>this.props.editfunction()}><i className="fa fa-edit"  /> Sửa</div>
                <div className="btn btn-danger btn-sm" onClick={()=>this.delete(this.props.id)}><i className="fa fa-trash-o" /> Xóa</div>
                </td>
        </tr>
        );
    }
}

export default TableTr;