import { useSelector } from 'react-redux'
import {
    SET_SEARCH,
    SET_IMAGES,
    SET_NEWS,
    SET_BOOKMARK,
    DELETE_BOOKMARK,
   
    SET_LOADING,
    SET_ERROR

} from '../actionType/index'


const URL = 'https://google-search3.p.rapidapi.com/api/v1'
const API_KEY = process.env.API_KEY

export const fetchSearch = (query) => {
    console.log(query, "INI QUERY ACTION")
    console.log(API_KEY, "INI APIKEY")
    return (dispatch) => {
        dispatch({ type: SET_LOADING, payload: true })
        fetch(`${URL}/search/q=${query}&num=100`, {
            method: "GET",
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '3585212757msh7c19f2f8bc90486p1b3e6djsnac6407d48399'
            }
        })
            .then(resp => {
                console.log(resp)
                
                if (!resp.ok) {
                    return resp.json().then(err => {
                        Promise.reject(err)
                    })
                }
                
                return resp.json()
            })
            .then(data => {
                //console.log(data, "INI SEARCHES")
                dispatch({ type: SET_SEARCH, payload: data })
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
               
                
                dispatch({ type: SET_LOADING, payload: false })
            })
    }

}

export const fetchImages = (query) => {
    return (dispatch) => {
        dispatch({ type: SET_LOADING, payload: true })
        fetch(`${URL}/image/q=${query}&num=100`, {
            method: "GET",
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '3585212757msh7c19f2f8bc90486p1b3e6djsnac6407d48399'
            }
        })
            .then(resp => {
                console.log(resp)
                if (!resp.ok) {
                    return resp.json().then(err => {
                        Promise.reject(err)
                    })
                }
                return resp.json()
            })
            .then(data => {
                console.log(data, "INI IMAGES")
                dispatch({ type: SET_IMAGES, payload: data })
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                dispatch({ type: SET_LOADING, payload: false })
            })
    }

}

export const addToBookmark = (link) => {
    
    return (dispatch) => {
        console.log("INI DISPATCH BOOKMARK")
        dispatch({ type: SET_BOOKMARK, payload: link })
    }
}
export const deleteFromBookmark =(link) => {
    return (dispatch) => {
        console.log("INI DELETE BOOKMARK")
        dispatch({ type: DELETE_BOOKMARK, payload: link })
    }
}

export const fetchNews = (query) => {
    console.log("INI FETCH NEWS")
    return (dispatch) => {
        dispatch({ type: SET_LOADING, payload: true })
        fetch(`${URL}/news/q=${query}&num=100`, {
            method: "GET",
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '3585212757msh7c19f2f8bc90486p1b3e6djsnac6407d48399'
            }
        })
            .then(resp => {
                console.log(resp)
                if (!resp.ok) {
                    return resp.json().then(err => {
                        Promise.reject(err)
                    })
                }
                return resp.json()
            })
            .then(data => {
                console.log(data, "INI NEWS")
                dispatch({ type: SET_NEWS, payload: data })
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                dispatch({ type: SET_LOADING, payload: false })
            })
    }

}

