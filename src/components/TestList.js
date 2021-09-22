import React from 'react'
import {useState} from 'react'

const data = [
    {
        name: "test1",
        result: "pass",
        id: 1
    },
    {
        name: "test2",
        result: "pass",
        id: 2

    },
    {
        name: "test3",
        result: "pass",
        id: 3
    },
    {
        name: "test4",
        result: "pass",
        id: 4
    },
    {
        name: "test5",
        result: "pass",
        id: 5

    }
]

// check box controle


const TestList = () => {
	const [checkedVals, setCheckedVals] = useState([])

    return (
        <form action="">
            <div className="listItem">
                {data.map((item) => (
                    <ul key={item.id} className="list_items">
                        <li className="item_name">{item.name}</li>
                        <li className="item_result">{item.result}</li>
                    </ul>
                ))}
            </div>

            <div className="checkBox_list">
                {data.map(item => (
                    <ul key={item.id} className="list_checkbox">
                        <li className="checkbox_item">
                            <input
                                type="checkbox"
                                id = {item.id}
                                name = {item.name}
                                checked = {checkedVals.includes(item.id)}
                                onChange = {() => {
	                                	if (checkedVals.includes()) {
	                                		// remove from list
	                                		checkedVals.filter(e => !e.id)
	                                		setCheckedVals(checkedVals)
	                                	}else{
	                                		let newCheckVal = checkedVals
	                                		newCheckVal.push(item.id)
	                                		setCheckedVals(newCheckVal)
	                                		console.log(checkedVals)
	                                	}
	                                }
	                            }
                            />
                            <span>
                                <div>
                                    <a href="#">{item.name}</a>
                                </div>
                            </span>
                        </li>
                    </ul>
                ))}
            </div>
        </form>
    )
}

export default TestList
