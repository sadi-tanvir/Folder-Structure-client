import React from 'react';
import '../App.css';
import { AddFolderIcon, CloseFolderIcon, DeleteFolderIcon, OpenFolderIcon } from './icons';

interface FolderPropsType {
    name: string;
    children?: FolderPropsType[];
}

const Folder: React.FC<FolderPropsType> = ({ name, children }) => {

    return (
        <div className="folder">
            <div className="folder-header">
                <div className='folderIcon'>
                    {/* <CloseFolderIcon /> */}
                    <OpenFolderIcon />
                </div>
                {name}
                <div className='addDeleteIcon'>
                    <AddFolderIcon />
                    {
                        name === 'root' || <DeleteFolderIcon />
                    }
                </div>
            </div>
            {children && children.length > 0 && (
                <div className="folder-children">
                    {children.map((child, index) => (
                        <Folder key={index} name={child.name} children={child.children} />
                    ))}
                </div>
            )}
        </div>
    );
};


export default Folder; 