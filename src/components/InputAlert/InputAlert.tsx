import { useState } from "react";
import classes from "./Input.module.css";
import axios from "axios";

type InputAlertPropsType = {
    openPopup: boolean;
    setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
    parentId: string;
    setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
    isChange: boolean;
}

const InputAlert = ({ openPopup, setOpenPopup, parentId, setIsChange, isChange }: InputAlertPropsType) => {
    const [folderName, setFolderName] = useState("")
    const handleInput = async () => {
        try {
            const res = await axios.post(`https://folder-structure-server-nb0y.onrender.com/api/folder/create`, {
                parentId: parentId,
                name: folderName
            })
            if (res) {
                console.log(res, 'created');
                setOpenPopup(false)
                setIsChange(!isChange);
                setFolderName("")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={classes.container}>
            <div className={`${classes.popup} ${openPopup ? classes.open_popup : ''}`}>
                <h2>Type Folder Name</h2>
                <input onChange={(e) => setFolderName(e.target.value)} type="text" className={classes.inputFolder} />
                <button onClick={handleInput} className={classes.popup_btn} type="button">Create Folder</button>
            </div>
        </div>
    )
}

export default InputAlert