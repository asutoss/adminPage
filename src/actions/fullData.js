export const getData = () => ({
    type : 'GET_DATA'
});

export const getMonData = (val) => ({
    type : 'GET_MON_DATA',
    mon : val
});