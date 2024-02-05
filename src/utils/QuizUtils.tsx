import axios from "axios"

// TODO make error code more detailed
export const SendUserData = async (partner_1:any, partner_2: any) => {
    try{
        const userData = {
            "partner_1": { name: partner_1["name"], gender: partner_1["gender"]},
            "partner_2": { name: partner_1["name"], gender: partner_1["gender"]}
        }
    
        const response = await axios.post("https://intimaquiz-backend-rbxibl5hia-uc.a.run.app/create_session_group", userData);
        
        if(response.status === 200) {
            return response.data;
        }
        else{
            return {"error": "An issue occurred creating session, please try again."}
        }
    }
    catch (error) {
        return {"error": "An issue occurred creating session, please try again."}
    }
}


export const getSessionData = async (session_id: any) => {
    try {
        const response = await axios.get("https://intimaquiz-backend-rbxibl5hia-uc.a.run.app/get_session_group_from_session/" + session_id);
        
        if(response.status === 200) {
            return response.data;
        }
        else{
            return {"error": "An issue occurred gathering session data, please try again."}
        }
    }
    catch(error) {
        return {"error": "An issue occurred gathering session data, please try again."}
    }
}

export const getSessionQuestions = async (session_id: any, category:any) => {
    
    try {
        const response = await axios.get("https://intimaquiz-backend-rbxibl5hia-uc.a.run.app/session_questions/" + session_id);
        
        if(response.status === 200) {
            return response.data;
        }
        else{
            return {"error": "An issue getting questions, please try again."}
        }
    }
    catch(error) {
        return {"error": "An issue occurred getting questions, please try again."}
    }
}