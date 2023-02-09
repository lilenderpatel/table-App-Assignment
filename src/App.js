import "./App.css";
import ItemList from "./components/ItemList";
import { Component } from "react";
import { ImCross } from "react-icons/im";

import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Button from "./components/Button";

const pages = [
  { id: 10, page: "10 per page" },
  { id: 20, page: "20 per page" },
  { id: 30, page: "30 per page" },
  { id: 50, page: "50 per page" },
];

class App extends Component {
  state = { count: 0, searchInput: "", value: 0, contentList: [] };

  componentDidMount() {
    this.uptetedList();
  }

  uptetedList = async () => {
    const url = "https://dev.ylytic.com/ylytic/test";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.comments);
    if (response.ok === true) {
      const updetedData = data.comments.map((eachComment) => ({
        at: eachComment.at,
        author: eachComment.author,
        like: eachComment.like,
        reply: eachComment.reply,
        text: eachComment.text,
      }));
      const updatedCount = updetedData.length;
      const updetedValue = updatedCount / 10;
      this.setState({
        contentList: updetedData,
        count: updatedCount,
        value: updetedValue,
      });
    }
  };

  onClickPage = (event) => {
    const { count, contentList } = this.state;
    const page = event.target.value;
    const updateValue = Math.ceil(count / page);

    const updatedList2 = contentList.slice(0, page);

    this.setState({ value: updateValue, contentList: updatedList2 });
  };

  onClickClear = () => {
    const { contentList } = this.state;
    this.setState({ searchInput: "", contentList: contentList });
  };

  onChangefilter = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { count, value, contentList, searchInput } = this.state;
    const searchResults = contentList.filter((eachUser) =>
      eachUser.at.includes(searchInput)
    );
    return (
      <div>
        <h1 className="heading">Create Tabular View Apis</h1>
        <div className="changes-input">
          <div>
            <input
              className="filter-bar"
              placeholder="filter"
              onChange={this.onChangefilter}
              value={searchInput}
              type="text"
            />
            <button
              className="clear-button"
              type="button"
              onClick={this.onClickClear}
            >
              <ImCross />
            </button>
          </div>

          <p className="paragraph">
            <span>{count}</span> records
          </p>
          <select className="page-filter" onClick={this.onClickPage}>
            {pages.map((eachPage) => (
              <option key={eachPage.id} value={eachPage.id}>
                {eachPage.page}
              </option>
            ))}
          </select>
        </div>
        <div className="button-right">
          <Button value={value} count={count} />
        </div>

        <div>
          <header>
            <nav className="header1">
              <div className="button-drop">
                <p>At</p>
                <div className="drop-down">
                  <MdArrowDropUp className="drop" />
                  <MdArrowDropDown className="drop" />
                </div>
              </div>
              <div className="button-drop">
                <p>Author</p>
                <div className="drop-down">
                  <MdArrowDropUp className="drop" />
                  <MdArrowDropDown className="drop" />
                </div>
              </div>
              <div className="button-drop">
                <p>Like</p>
                <div className="drop-down">
                  <MdArrowDropUp className="drop" />
                  <MdArrowDropDown className="drop" />
                </div>
              </div>
              <div className="button-drop">
                <p>Reply</p>
                <div className="drop-down">
                  <MdArrowDropUp className="drop" />
                  <MdArrowDropDown className="drop" />
                </div>
              </div>
              <div className="button-drop">
                <p>Text</p>
                <div className="drop-down">
                  <MdArrowDropUp className="drop" />
                  <MdArrowDropDown className="drop" />
                </div>
              </div>
            </nav>
            <hr />
          </header>
          <div>
            <ul>
              {searchResults.map((eachItem) => (
                <ItemList key={eachItem.at} itemDetails={eachItem} />
              ))}
            </ul>
          </div>
          <div>
            <Button value={value} count={count} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
