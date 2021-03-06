import React from "react";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

function Header() {
  return (
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <AssignmentTurnedInIcon />
          </a>
          <div class="flex-row-reverse">
            <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="./Todo">Tasks</a>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Header;
