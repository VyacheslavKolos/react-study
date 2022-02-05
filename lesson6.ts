// 1) создать интерфейс на основе этого объекта:
//
// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//     "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
// },
//     "links": {
//     "article_link": null,
//         "video_link": "https://youtu.be/J442-ti-Dhg"
// },
//     "rocket": {
//     "rocket_name": "Falcon 9",
//         "first_stage": {
//         "cores": [
//             {
//                 "flight": 7,
//                 "core": {
//                     "reuse_count": 6,
//                     "status": "unknown"
//                 }
//             }
//         ]
//     },
//     "second_stage": {
//         "payloads": [
//             {
//                 "payload_type": "Satellite",
//                 "payload_mass_kg": 15400,
//                 "payload_mass_lbs": 33951.2
//             }
//         ]
//     }
// }
// }

interface IMission {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links:ILinks;
    rocket: IRocket
}

interface ILinks {
    article_link: null;
    video_link: string;
}
interface IRocket{
    rocket_name: string;
    first_stage: {
        cores: [
            {
                flight: string;
                core: {
                    reuse_count: string;
                    status: string;
                }
            }
        ]
    },
    second_stage: {
        payloads: [
            {
                payload_type: string;
                payload_mass_kg: number;
                payload_mass_lbs: number;
            }
        ]
    }
}

//--------------------------------------------------------------------


// 2) протипизировать функции:

// const user = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// }
const user: { name: string, age: number, gender: string } = {
    name: "Max",
    age: 18,
    gender: 'male'
}


// function sum(a, b) {
//     return a + b
// }
function sum(a: number, b: number): number {
    return a + b
}


// function showSum(a,b){
//     console.log(a + b);
// }
function showSum(a: number, b: number): void {
    console.log(a + b);
}


// function incAge(someUser, inc) {
//     someUser.age += inc
//     return someUser
// }
interface IUser {
    name: string;
    age: number;
    gender: string;
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
console.log(incAge(user, 2));
