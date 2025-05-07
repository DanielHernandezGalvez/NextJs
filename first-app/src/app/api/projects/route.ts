export const GET = () => {
    return Response.json([
        { id: 1, name: 'Proyecto 1', description: 'Descripción del proyecto 1' },
        { id: 2, name: 'Proyecto 2', description: 'Descripción del proyecto 2' },
    
    ])
}