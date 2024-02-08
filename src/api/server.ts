let token = '42c96f39bb6c89e8d798e9d6a1611f4a482c8e473cea32fc'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://phonebook-5z3q.onrender.com/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        });
        
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://phonebook-5z3q.onrender.com/api/contacts`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://phonebook-5z3q.onrender.com/api/contacts/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },
    
    delete: async (id:string) => {
        const response = await fetch(`https://phonebook-5z3q.onrender.com/api/contacts/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        })
        
        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}