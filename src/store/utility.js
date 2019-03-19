export const updateObject = (prevObject, updatedProperties) => {
    return {
        ...prevObject,
        ...updatedProperties
    }
}