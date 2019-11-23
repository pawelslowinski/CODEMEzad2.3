const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

function myFunction (speed, typeOfRoad='city')
{
    if (typeOfRoad == 'city')
    {
        if (speed < CITY_SPEED_LIMIT)
        {
            console.log('Miasto: jedziesz prawidlowo')
        }
        else
        {
            console.log('Miasto: przekroczyles predkosc')
        }
    }

    if (typeOfRoad == 'expressway')
    {
        if (speed < TWO_LANE_EXPRESSWAY_SPEED_LIMIT)
        {
            console.log('Eska: jedziesz prawidlowo')
        }
        else
        {
            console.log('Eska: przekroczyles predkosc')
        }
    }
    

    if (typeOfRoad == 'highway')
    {
        if (speed < HIGHWAY_SPEED_LIMIT)
        {
            console.log('Autostrada: jedziesz prawidlowo')
        }
        else
        {
            console.log('Autostrada: przekroczyles predkosc')
        }
    }
}
