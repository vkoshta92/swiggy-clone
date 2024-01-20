export function filterData(searchInput,allRestaurants){
    return allRestaurants.filter((res)=>res?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
    }

// export function filterData(searchInput,allRestaurants){
//     const filterData= allRestaurants.filter((res)=>res?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
//     );
// return filterData;
//     }
    