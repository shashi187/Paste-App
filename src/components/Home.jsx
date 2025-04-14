import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { addToPastes, updateToPastes } from '../redux/pasteslice';

const Home = () => {
  const [title,setTitle] = useState('');
  const [value,setValue] = useState('');
  const [searchparams,setSearchparams] = useSearchParams();
  const pasteId = searchparams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.paste);
  useEffect(() => {
    if (pasteId){
      const paste = allPastes.find((p) => p._id === pasteId);
    setTitle(paste.title);
    setValue(paste.content);}
    }, [pasteId]
  )
  function createPaste() {
      const paste = {
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(36),
        createAt:new Date().toISOString(),
      }
      
      if (pasteId) {
        dispatch(updateToPastes(paste));
      }
      else{
        dispatch(addToPastes(paste));
      }
      setTitle('');
      setValue('');
      setSearchparams({});
  }
  return (
    <div>
      <div className='flex gap-4 place-content-between'>
        <input
          className='p-2 rounded-2xl border mt-2 w-[70%]' 
          type='text'
          placeholder='enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className='rounded-2xl p-3 mt-2' onClick={createPaste}>
          {
            pasteId ? "update My paste" : "Create My Paste"
          }
        </button>
      </div>
      <div className='mt-8'>
        <textarea 
          className='rounded-2xl mt-4 border min-w-[500px] p-4 '
          value={value}
          placeholder='enter content'
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default Home
