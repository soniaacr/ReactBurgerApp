

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://myburgerapi-aa5eb1526ae2.herokuapp.com/burgers`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()

        },

        create: async(data: any = {}) => {
            const response = await fetch(`https://myburgerapi-aa5eb1526ae2.herokuapp.com/burgers`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
    
                },
                body: JSON.stringify(data)
            });
    
            if(!response.ok){
                throw new Error('Failed to Create new data on server')
            }
    
            return await response.json()
    },
        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://myburgerapi-aa5eb1526ae2.herokuapp.com/burgers/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

                
            },
            body: JSON.stringify(data)
        })
            if (!response.ok) {
                throw new Error('Failed to update data on server')
            }

            return await response.json()
        },

        delete: async(id:string) => {
            const response = await fetch(`https://myburgerapi-aa5eb1526ae2.herokuapp.com/burgers/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',

                },
    
            })
        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}