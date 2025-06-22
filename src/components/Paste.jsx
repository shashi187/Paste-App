import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteslice';
import toast from 'react-hot-toast';
// import {
//   EmailShareButton,
//   FacebookShareButton,
//   GabShareButton,
//   HatenaShareButton,
//   InstapaperShareButton,
//   LineShareButton,
//   LinkedinShareButton,
//   LivejournalShareButton,
//   MailruShareButton,
//   OKShareButton,
//   PinterestShareButton,
//   PocketShareButton,
//   RedditShareButton,
//   TelegramShareButton,
//   ThreadsShareButton,
//   TumblrShareButton,
//   TwitterShareButton,
//   ViberShareButton,
//   VKShareButton,
//   WhatsappShareButton,
//   WorkplaceShareButton,
// } from "react-share";

import { GrView } from "react-icons/gr";
import { LuMailQuestion } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";


const Paste = () => {
  const paste = useSelector((state) => state.paste.paste);
  const [searchTerm,setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredData = paste.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }
  return (
    <div>
      <input
        className='p-2 rounded-2xl border w-[600px]'
        type='search'
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredData.length > 0 && 
          filteredData.map(
            (paste) => {
              return (
                <div className='border' key={paste}>
                  <div>
                    {paste.title}
                  </div>
                  <div>
                    {paste.content}
                  </div>
                  <div className='flex gap-4 place-content-evenly'>
                    <button>
                    <a href={`/?pasteId=${paste?._id}`}>
                       <MdOutlineEdit />
                      </a>
                    </button>
                    <button>
                      <a href={`/paste/${paste?._id}`}>
                       <GrView />
                      </a>
                    </button>
                    <button onClick={() => handleDelete(paste?._id)}>
                      <MdDeleteSweep />
                    </button>
                    <button onClick={() => {navigator.clipboard.writeText(paste?.content)
                        toast.success("copied to clipboard")
                      }
                    }>
                      <MdContentCopy />
                    </button>
                    <button>
                      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=darkshashi187@gmail.com&su=Hello%20from%20Item%20App&body=Hi%20there%2C%0A%0AThis%20email%20is%20being%20composed%20in%20Gmail%20from%20a%20React%20button.%0A%0ABest%20regards%2C%0AYour%20App`} target="_blank" rel="noopener noreferrer">
                        <LuMailQuestion />
                      </a>
                    </button>
                  </div>
                  <div>
                    {paste.createAt}
                  </div>
                </div>
              )
            }
              
          )
        }
      </div>

    </div>
  )
}

export default Paste
