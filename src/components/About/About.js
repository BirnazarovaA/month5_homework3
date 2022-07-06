import {useState} from "react";

function About() {
    const [projectName, setProjectName] = useState("Эксклюзивный магазин")
    return (
        <div>
            Добро пожаловать в наш {projectName}!
        </div>
    )
}

export default About;