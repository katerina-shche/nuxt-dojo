export default defineEventHandler( async (e) => {
    //handle queryparams

    const { name } = getQuery(e)
    //useQuery - is not used any more
    const { age } = await readBody(e)
    return {
        message: `Hello, ${name}! You are ${age} years old`
    }
})