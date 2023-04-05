import React,{Component} from "react";

export class Login extends Component {
  render() {
    return(
      <div>
          <div className="m-t">
            <label>
              Usuario:
            </label>
            <div>
              <input type="text" name="usuario" />
            </div>
          </div>

          <div className="m-t">
            <label>
              Contraseña:
            </label>
            <div>
              <input type="password" name="contrasenia" />
            </div>
          </div>
      </div>
    )
  }
}

export default Login;