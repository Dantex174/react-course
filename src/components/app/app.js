import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: false, key: 1},
                {name: "Alex M.", salary: 3000, increase: false, key: 2},
                {name: "Carl W.", salary: 5000, increase: false, key: 3}
            ]
        }
        this.maxID = 3;
    }

    deleteItem = (key) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.key === key);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.key !== key)
            }
        })
    }

    addItem = (name, salary) => {
        this.maxID = this.maxID + 1;
        this.setState(({data}) => {
            return {
                data: [...data, {name: name, salary: salary, key: this.maxID}]
            }
        })

    }

    render() {
        return (
            <div className='app'>
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onAddItem={this.addItem}/>
            </div>
        )
    }
}

export default App;