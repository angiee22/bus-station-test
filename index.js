const BusStationTest = async(event) => {
    
    const groups = event.data.split(",").map(Number);;
    const nPeople = groups.reduce((acc, cur) => acc + cur, 0);

    let x = groups[0];
    let sizes =[];
    let sum = 0;
    
    while (x <= nPeople) {

        for(var i=0;i<groups.length;i++){
            sum = sum + groups[i];
            if (sum == x){sum = 0;}
            else if (sum > x){break;}
        }

        if (sum == 0){sizes.push(x);}

        x++;
        sum = 0;
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({data: sizes}),
    };
    return response;
};

export const handler = BusStationTest;
