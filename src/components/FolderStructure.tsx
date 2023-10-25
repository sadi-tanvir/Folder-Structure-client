import React, { useState } from 'react';
import '../App.css';
import { AddFolderIcon, CloseFolderIcon, DeleteFolderIcon, OpenFolderIcon } from './icons';
import axios from 'axios';
import InputAlert from './InputAlert/InputAlert';

interface FolderPropsType {
  _id: string;
  parentId?: string;
  name: string;
  children: FolderPropsType[];
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
  isChange: boolean;
}

const Folder: React.FC<FolderPropsType> = ({ _id, parentId, name, children, setIsChange, isChange }) => {
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <>
      <InputAlert
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        parentId={_id}
        setIsChange={setIsChange}
        isChange={isChange}
      />
      <div className="folder">
        <div className="folder-header">
          <div className='folderIcon'>
            {children?.length > 0 ? <OpenFolderIcon /> : <CloseFolderIcon />}
          </div>
          {name}
          <div className='addDeleteIcon'>
            <AddFolderIcon onClick={() => setOpenPopup(true)} />
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
                setIsChange={setIsChange}
                isChange={isChange}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};


export default Folder; 