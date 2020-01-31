import { sp } from '@pnp/sp/presets/all';
import axios from 'axios';


export const GetData = async (): Promise<any[]> => {
    
    try {
        const response = await sp.web.lists
                                        .getByTitle('TestList')
                                        .items
                                        .get();
        const items = response.map(item => {
            return {
                Id: item.Id,
                Title: item.Title
            }
        });
        return items;
    } catch (error) {
        
    }
};


export const GetDataFromExternalSource = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response;

    } catch (error) {
        
    }
}