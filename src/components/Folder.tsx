import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Folder from './FolderStructure';


type FolderType = {
    _id: string;
    parentId?: string;
    name: string;
    children: FolderType[];
    setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
    isChange: boolean;
}

const App: React.FC = () => {
    const [folders, setFolders] = useState<FolderType[] | []>([])
    const [isChange, setIsChange] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`http://localhost:500/api/folder/folders`);
            setFolders([data.data.rootFolders])
        };
        getData()
    }, [isChange])

    return (
        <div className="folder-structure">
            {folders.map((folder: FolderType) => (
                <Folder
                    key={folder._id}
                    _id={folder._id}
                    parentId={folder.parentId || ""}
                    name={folder.name}
                    children={folder.children}
                    setIsChange={setIsChange}
                    isChange={isChange}
                />
            ))}
        </div>
    );
};

export default App;