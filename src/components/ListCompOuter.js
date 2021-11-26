import React, {useState} from 'react';

function toggleComp (id, setter) {
    if (document.getElementById(id).style.display === "block") {
        document.getElementById(id).style.display = "none";
        setter("Show");
    } else {
        document.getElementById(id).style.display = "block";
        setter("Hide");
    }
}

function ListItem (education) {
    return (
        <div className={"ListItem"}>
            <h2>{education.title}</h2>
            <p className={"description"}>{education.desc}</p>
            {
                education.date &&
                <p className={"date"}>{education.date}</p>
            }
        </div>
    )
}

function ListCompInner ({id, items}) {
    return (
        <div id={id}>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

function ListCompMiddle ({id, naming, itemList}) {
    const [CompState, setCompState] = useState("Show");
    return (
        <div>
            <button className={"ToggleBtn"} onClick={() => toggleComp(id, setCompState)}>{CompState + " " + naming}</button>
            <ListCompInner id={id} items={itemList.map(e => ListItem(e))} />
        </div>
    )
}

function ListCompOuter ({education, jobs, its}) {
    return (
        <div id={"ListComp"}>
            <ListCompMiddle id={"EduId"} naming={"education"} itemList={education} />
            <ListCompMiddle id={"JobId"} naming={"jobs"} itemList={jobs} />
            <ListCompMiddle id={"ItId"} naming={"IT skills"} itemList={its} />
        </div>
    );
}

export default ListCompOuter;