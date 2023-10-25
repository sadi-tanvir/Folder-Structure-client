import React, {  useState } from 'react';
import '../App.css';
import Folder from './FolderStructure';


type FolderType = {
    _id: string;
    name: string;
    children?: FolderType[] | [];
}

const App: React.FC = () => {
    const [folders, setFolders] = useState<any>([])

    console.log(folders);

    return (
        <div className="folder-structure">
            {folders.map((folder: FolderType, index: number) => (
                <Folder key={index} name={folder.name} children={folder.children} />
            ))}
        </div>
    );
};

export default App;