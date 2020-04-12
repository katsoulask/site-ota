import React, { Component } from "react"
import { FaAlignRight } from "react-icons/fa"
import { Link, withRouter } from "react-router-dom"
import "../style/style.css"
import { paths } from "../utils/constants"

class NavBar extends Component {
  state = {
    shouldShowLinks: false
  }

  toggle = () => {
    this.setState({ shouldShowLinks: !this.state.shouldShowLinks })
  }

  render() {
    const currentPath = this.props.location.pathname
    const { shouldShowLinks } = this.state
    return (
      <div className={"navBar"}>
        <ul>
          {paths.map((objLink, i) => {
            const css =
              currentPath === objLink.link //
                ? "navBarLink navBarLinkActive"
                : "navBarLink"
            return (
              <li key={i} className={shouldShowLinks ? "enabledLink" : undefined}>
                <Link to={objLink.link}>
                  <p className={css}>{objLink.text}</p>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className={"navBarBurgerMenuIcon"}>
          <button onClick={this.toggle}>
            <FaAlignRight />
          </button>
        </div>
      </div>
    )
  }
}

const NavBarWithLocation = withRouter(props => <NavBar {...props} />)
export default NavBarWithLocation
