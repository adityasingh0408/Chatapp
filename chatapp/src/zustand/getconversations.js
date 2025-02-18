import {create} from 'zustand';

const useconversation = create ((set)=>({
    selectedconversation:null,
    setselectedconversation:(selectedconversation) => set({selectedconversation}),
    messages:[],
    setMessages:(messages) =>set({messages}),

}))
export default useconversation;