import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Folder from './Folder';


type FolderType = {
    _id: string;
    parentId?: string;
    name: string;
    children: FolderType[];
    setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
    isChange: boolean;
}

const FolderLayout: React.FC = () => {
    const [folders, setFolders] = useState<FolderType | null>(null);
    const [isChange, setIsChange] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`https://folder-structure-server-nb0y.onrender.com/api/folder/folders`);
            setFolders(data.data.rootFolders);
        };
        getData();
    }, [isChange]);

    return (
        <div className="folder-structure">
            {
                folders !== null ?
                    <Folder
                        key={folders._id}
                        _id={folders._id}
                        parentId={folders.parentId || ""}
                        name={folders.name}
                        children={folders.children}
                        setIsChange={setIsChange}
                        isChange={isChange}
                    /> :
                    <h1>Loading...</h1>
            }
        </div>
    );
};

export default FolderLayout;