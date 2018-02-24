/*
 * sp_get_restaurants_by_distance
 * Nathan Muller
 * 2018-02-22
 *
 * Gets up to 20 restaurants with pRaidus miles of the given center point.  Returns
 * info about the restaurants in json.
 * ======== PARAMETERS:
 * ============= pCenterLat double
 * ============= pCenterLong double
 * ============= pRadius int (expressed in miles)
 */
use dank;
drop procedure if exists sp_get_restaurants_by_distance;
delimiter $$
create procedure sp_get_restaurants_by_distance(
    in pCenterLat double,
    in pCenterLong double,
    in pRadius int
)
 
begin
    select
        concat("[", 
            group_concat(
                concat("{id: ", r.id, ","),
                -- DEF NEED THESE ITEMS...DELIVER THE REST LATER WHEN YOU CLICK ON A SPECIFIC RESTAURANT
                concat("n: \"", r.name, "\","),
                concat("la: ", r.latitude, ","),
                concat("lo: ", r.longitude, "}")
            ),
            "]"
        ) as json
    from
        restaurant r
    where
        -- Modified from https://stackoverflow.com/questions/8994718/mysql-longitude-and-latitude-query-for-other-rows-within-x-mile-radius
        pRadius > (select
            6371 *
            acos(
                cos(radians(pCenterLat)) *
                cos(radians(r.latitude)) *
                cos(
                    radians(r.longitude) - radians(pCenterLong)
                ) +
                sin(radians(pCenterLat)) *
                sin(radians(r.latitude))
            )
        )
    order by
        r.id
    limit
        20
    ;
end$$

delimiter ;
