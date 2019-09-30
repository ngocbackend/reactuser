import React, { Component } from 'react';

import TableTr from './TableTr.js';

class Table extends Component {
    deleteuser = (userid) =>{
       this.props.deleteuserApp(userid)
    }
    render() {

        return (
            
            <div className="col">
                <table className="table table-striped table-hover table-inverse">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>                                                      
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.dulieu.map((value,index) => {
                            return(
                                 <TableTr
                                 deleteuser ={(userid)=>this.deleteuser(userid)}
                                  key={index}
                                  id={value.id}
                                   stt={index} 
                                   name={value.name}
                                    phone={value.phone}
                                     permission={value.permission} 
                                     editfunction = {() => this.props.editfunctions(value)}/>
                            )
                           
                        })}
                      
                    
                    
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;