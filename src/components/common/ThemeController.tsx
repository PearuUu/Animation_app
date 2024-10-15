import React, { Component } from "react";
import themes from "../../themes";
import { RiArrowDropDownLine } from "react-icons/ri";

interface ThemeControllerState {
  showThemes: boolean;
}

export default class ThemeController extends Component<
  object,
  ThemeControllerState
> {
  constructor(props: object) {
    super(props);
    this.state = {
      showThemes: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      showThemes: !prevState.showThemes,
    }));
  };
  render() {
    const { showThemes } = this.state;
    return (
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1"
          onClick={this.toggleDropdown}
        >
          <span>Theme</span>
          <RiArrowDropDownLine
            className="inline-block fill-current opacity-60 p-0"
            size={30}
          />
        </div>
        {showThemes && (
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
          >
            {themes.map((theme: string, index: number) => (
              <li key={index}>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label={theme}
                  value={theme}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
