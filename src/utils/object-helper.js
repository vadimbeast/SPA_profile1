export const updateObjectInArray = (items, itemId, objPorpName, newObjProps) => {
    return items.map(u => {
        if (u[objPorpName] === itemId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
}