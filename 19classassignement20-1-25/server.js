import express from 'express';

const userid = [
    { "id": 1, "name": "sani" },
    { "id": 2, "name": "fatima" },
    { "id": 3, "name": "haisum" },
    { "id": 4, "name": "daniyal" },
    { "id": 5, "name": "jack" }
];

const orders = [
    { "id": 1, "userid": 1, "order": "shoes" },
    { "id": 2, "userid": 1, "order": "laptop" },
    { "id": 3, "userid": 4, "order": "bags" }
];


    function order_useridfunc(userId){
        return new Promise((resolve , reject) => {
    const userorder = orders.filter(id => id.userid === userId);
    if(userorder){
        resolve(userorder)
    }
    else{
        reject('no orders found for this users')
    }

        });
    }

    async function asynccall(orderparam) {
        
        try{
        const userorder = await order_useridfunc(orderparam);
        console.log(`first order for userid ${orderparam} :` ,userorder);
        }catch(error){

            console.log("error")
        }
    }
    asynccall(1)
    asynccall(2)










// function getOrderByUserId(userId) {
//     return new Promise((resolve, reject) => {
//         const userOrder = orders.find(order => order.userid === userId);
//         if (userOrder) {
//             resolve(userOrder);
//         } else {
//             reject('No orders found for this user.');
//         }
//     });
// }

// async function fetchOrder(userId) {
//     try {
//         const userOrder = await getOrderByUserId(userId);
//         console.log(`First order for user ID ${userId}:`, userOrder);
//     } catch (error) {
//         console.log(error);
//     }
// }

// // Example usage
// fetchOrder(1); // Fetch first order for user ID 1
// fetchOrder(3); // Fetch first order for user ID 3 (no orders, will reject)
