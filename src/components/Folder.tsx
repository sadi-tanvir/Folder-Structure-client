import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Folder from './FolderStructure';


type FolderType = {
    _id: string;
    parentId?: string;
    name: string;
    children: FolderType[];
}

const App: React.FC = () => {
    const [folders, setFolders] = useState<FolderType[] | []>([])

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`http://localhost:500/api/folder/folders`);
            setFolders([data.data.rootFolders])
        };

        getData()
    }, [])

    return (
        <div className="folder-structure">
            {folders.map((folder: FolderType) => (
                <Folder
                    key={folder._id}
                    _id={folder._id}
                    parentId={folder.parentId || ""}
                    name={folder.name}
                    children={folder.children}
                />
            ))}
        </div>
    );
};

export default App;