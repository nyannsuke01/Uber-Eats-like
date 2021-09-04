import axios from 'axios';
import { foodsIndex } from '../urls/index'

export const fetchFoods = (restaurantId) => {
    // restaurantIdという変数名で受け取る
    return axios.get(foodsIndex(restaurantId))
        .then(res => {
            return res.data
        })
        .catch((e) => console.error(e))
}