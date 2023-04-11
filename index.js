const BusStationTest = async(event) => {
    
    const group = event.groups.split(",").map(Number);
    const nPeople = group.reduce((acc, cur) => acc + cur, 0);

    let x = group[0];
    let size =[];
    let sum = 0;
    
    while (x <= nPeople) {

        for(var i=0;i<group.length;i++){
            sum = sum + group[i];
            if (sum == x){sum = 0;}
            else if (sum > x){break;}
        }

        if (sum == 0){size.push(x);}

        x++;
        sum = 0;
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({sizes: size}),
    };
    return response;
};

export const handler = BusStationTest;

