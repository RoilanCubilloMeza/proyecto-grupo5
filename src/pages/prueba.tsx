import React, { Component } from "react";
import { connect } from "react-redux";
import { showUsers } from "@/redux/actions/usuariosActions";

interface User {
  id: number;
  name: string;
}

interface UsersState {
  list: User[
  "id"
  ];
}

interface AppState {
  users: UsersState;
}

interface PruebaProps {
  users: User[];
  showUsers: () => void;
}

class Prueba extends Component<PruebaProps> {
  componentDidMount() {
    this.props.showUsers();
  }

  renderUserList() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h1>Hola mundo</h1>
        <ul>{this.renderUserList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, { showUsers })(Prueba);
