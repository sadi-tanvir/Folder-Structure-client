import React from 'react';
import '../App.css';
import { AddFolderIcon, CloseFolderIcon, DeleteFolderIcon, OpenFolderIcon } from './icons';

interface FolderPropsType {
  _id: string;
  parentId?: string;
  name: string;
  children:FolderPropsType[];
}

const Folder: React.FC<FolderPropsType> = ({ _id, parentId, name, children }) => {

 

  return (
    <div className="folder">
      <div className="folder-header">
        <div className='folderIcon'>
          {children?.length > 0 ? <OpenFolderIcon /> : <CloseFolderIcon />}
        </div>
        {name}
        <div className='addDeleteIcon'>
          <AddFolderIcon />
          {name === 'root' || <DeleteFolderIcon />}
        </div>
      </div>
      {children && children.length > 0 && (
        <div className="folder-children">
          {children.map((child) => (
            <Folder
              key={child._id}
              _id={child._id}
              parentId={child.parentId || ""}
              name={child.name}
              children={child.children}
            />
          ))}
        </div>
      )}
    </div>
  );
};


export default Folder; 