import { GET_FILES_FAIL, GET_FILES_REQUEST, GET_FILES_SUCCESS, UPLOAD_FILE_FAIL, UPLOAD_FILE_REQUEST, UPLOAD_FILE_SUCCESS } from "../constants/fileConstants";
import { CLEAR_ERRORS } from "../constants/userConstants";

export const getuploadedFilesReducer=(state={files:{},resultPerPage:1},action)=>{
    switch(action.type){
        case GET_FILES_REQUEST:
           
            return{
                loading:true,
                
            }
        case GET_FILES_SUCCESS:
            return{
                ...state,
                loading:false,
               resultPerPage:action.resultPerPage,
               fileCount:action.fileCount,
                files:action.payload,
            }
        case GET_FILES_FAIL:
            return{
                ...state,
                loading: false,
                files: null,
             
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null,
            }
        default:
            return state
    }
};

export const uploadFilesReducer=(state={message:{}},action)=>{
    switch(action.type){
        case UPLOAD_FILE_REQUEST:
           
            return{
                loading:true,
                
            }
        case UPLOAD_FILE_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                message:action.payload
            }
        case UPLOAD_FILE_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null,
            }
        default:
            return state
    }
};