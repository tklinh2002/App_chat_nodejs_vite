import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic(
        "65bd5133-c73e-471c-88ba-ad76f9d48fe9",
        props.user.username,
        props.user.secret
      );
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
}

export default ChatsPage