import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { addToPastes, updateToPastes } from '../redux/pasteslice';
import Paste from './Paste';

const ViewPaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.paste);
  const paste = allPastes.filter((p) => p._id === id)[0];

  return (
    <div>
    <div className='flex gap-4 place-content-between'>
      <input
        className='p-2 rounded-2xl border mt-2 w-[70%]' 
        type='text'
        placeholder='enter title'
        value={paste.title}
        disabled
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <button className='rounded-2xl p-3 mt-2' onClick={createPaste}>
        {
          pasteId ? "update My paste" : "Create My Paste"
        }
      </button> */}
    </div>
    <div className='mt-8'>
      <textarea 
        className='rounded-2xl mt-4 border min-w-[500px] p-4 '
        value={paste.content}
        disabled
        placeholder='enter content'
        onChange={(e) => setValue(e.target.value)}
        rows={20}
      />
    </div>
  </div>
  )
}

export default ViewPaste
