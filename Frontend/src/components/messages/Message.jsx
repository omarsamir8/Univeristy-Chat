import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
    const {authUser}= useAuthContext();
    const {selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe? 'chat-end' : 'chat-start';
    const profilePic = fromMe? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe? 'bg-blue-500' : "";


    return (<>
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img 
                        alt="Tailwind css chat bubble component"
                        src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white font-semibold ${bubbleBgColor}`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-black font-extrabold text-xs flex gap-1 items-center pb-3'>
                {formattedTime}
            </div>
        </div>

        
    </>
    )
}

export default Message


// const Message = () => {
//     return (<>
//         <div className='chat chat-end '>
//             <div className='chat-image avatar'>
//                 <div className='w-10 rounded-full'>
//                     <img 
//                         alt="Tailwind css chat bubble component"
//                         src={'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'} />
//                 </div>
//             </div>
//             <div className={'chat-bubble text-white bg-blue-500'}>Hi! Whats up?</div>
//             <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
//         </div>

//         {/* <div className='chat chat-start '>
//             <div className='chat-image avatar'>
//                 <div className='w-10 rounded-full'>
//                     <img 
//                         alt="Tailwind css chat bubble component"
//                         src={'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'} />
//                 </div>
//             </div>
//             <div className={'chat-bubble text-white bg-blue-500'}>Hi! Whats uppppppppppppppppppp?</div>
//             <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
//         </div> */}
//     </>
//     )
// }

// export default Message
