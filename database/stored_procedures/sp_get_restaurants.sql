/*
 * sp_get_restaurants
 * Nathan Muller
 * 2018-02-22
 *
 * Gets up to 20 restaurants with pRaidus miles of you.  Returns
 * info about the restaurants in json.
 */

begin
    select concat("[", 
    (
        select group_concat(select concat("{",
            (
                select
                    
            ),
            "}"
        )
    ),
    "]"
    ) as json;
end